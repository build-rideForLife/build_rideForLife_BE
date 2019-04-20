const express = require('express');
const router = express.Router();
const db = require('../../../data/dbConfig')
const restrict = require('../auth/restricted-middleware')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secret = require('../../secrets.js').jwtSecret;
 


// TESTING TO SEE IF AUTH WORKS
router.get('/', restrict, (req, res) => {
    db('riders')
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

// get by id
router.get('/:id', restrict, (req, res) => {
    db('riders')
    .select('riders_id', 'username', 'phone')
    .where({ riders_id: req.params.id})
    .first()
    .then(rider => {
        if(!rider){
            res.status(404).json({error: "This user/rider does not exist"})
        }
        res.status(200).json(rider)
    })
    .catch(err => {
        res.json(err)
    })
})


// update for phone or whatever
router.put('/:id', restrict, (req, res) => {
    db('riders')
    .where({ riders_id: req.params.id})
    .update(req.body)
    .then(count => {
        if(count > 0) {
            res.status(202).json({message: 'Update Successful'})
        } else {
            res.status(404).json({ message: 'record not found'})
        }
        
    })
    .catch(error => {
        res.status(500).json({ message: `there was an error updating ${error}`})
    })
})



// delete acct if they want to 
router.delete('/:id', restrict, (req, res) => {
    db('riders')
    .where({ riders_id: req.params.id })
    .del()
    .then(count => {
        if(count > 0) {
            res.status(202).json({message: 'User account removed successfully'})
        } else {
            res.status(404).json({ message: 'there was an error deleting'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: `there was an error deleting ${error}`})
    })
})



module.exports = router;