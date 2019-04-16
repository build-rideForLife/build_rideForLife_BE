const express = require('express');
const router = express.Router();
const db = require('../../../data/dbConfig')
const restrict = require('../auth/restricted-middleware')


//TESTING TO SEE IF OTHER ENDPOINTS WORK
router.get('/',  (req, res) => {
    db('drivers')
    .then(drivers => {
        res.status(200).json(drivers)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

//Get Driver Profile By ID
// router.get('/:id',  (req, res) => {
//     db('drivers')
//     .select('driver_id', 'username', 'phone')
//     .where({ driver_id: req.params.id})
//     .first()
//     .then(driver => {
//         res.status(200).json(driver)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })

router.get('/:id', (req,res) => {
    const { id } = req.params
    db('reviews')
    .where({'reviews.review_id': id})
    .join('drivers', {'reviews.review_id': 'drivers.driver_id'})
    .select('reviews.review', 'reviews.rating', 'drivers.username')
    .then(review => {
        res.status(200).json(review)
    }).catch(error => {
        res.status(500).json(error)
    })
})



//abililty for driver to edit profile
router.put('/:id', (req, res) => {
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

//Post review
router.post('/:id', (req, res) => {
    const {driver_id, rider_id, rating, review}= req.body
    db('reviews')
    .where({ driver_id: req.params.id})
    .insert({driver_id, rider_id, rating, review})
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
router.delete('/:id', (req, res) => {
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