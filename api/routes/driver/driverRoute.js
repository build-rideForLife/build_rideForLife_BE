const express = require('express');
const router = express.Router();
const db = require('../../../data/dbConfig')
const restrict = require('../auth/restricted-middleware')


//TESTING TO SEE IF OTHER ENDPOINTS WORK
router.get('/',  restrict, (req, res) => {
    db('drivers')
    .then(drivers => {
        res.status(200).json(drivers)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

//Gets Driver by ID and Reviews
router.get('/:id', restrict, (req, res) => {
    const { id } = req.params;
    db('drivers')
    .where({'drivers.driver_id': id})
    .first()
    .select('driver_id', 'username', 'email')
    .then(driver => {
        db('reviews').where({driver_id: id})
        .join('riders', {'reviews.rider_id': 'riders.riders_id'})
        .select('riders.username', 'reviews.rating','reviews.review')
        .then(review => {
         driver.review = review
            res.status(200).json(driver)
    })
})
    .catch(error => {
        res.status(500).json({message: `there was an error retrieving the data - ${error}`})
    })
})



//abililty for driver to edit profile
router.put('/:id', restrict, (req, res) => {
    db('drivers')
    .where({ driver_id: req.params.id})
    .update(req.body)
    .then(count => {
        if(count > 0) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ message: 'record not found'})
        }
        
    })
    .catch(error => {
        res.status(500).json({ message: `there was an error updating ${error}`})
    })
})

//Post a review
router.post('/reviews', restrict, (req, res) => {
    const {driver_id, rating, review, rider_id}= req.body
    db('reviews')
    .where({ driver_id: req.params.id})
    .insert({driver_id, rating, review, rider_id})
    .then(count => {
        if(count > 0) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ message: 'record not found'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: `there was an error updating ${error}`})
    })
})

//ability for driver to delete acct
router.delete('/:id', restrict, (req, res) => {
    db('drivers')
    .where({ driver_id: req.params.id })
    .del()
    .then(count => {
        if(count > 0) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ message: 'there was an error deleting'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: `there was an error deleting ${error}`})
    })
})

module.exports = router;