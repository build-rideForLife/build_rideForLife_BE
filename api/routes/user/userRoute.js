const express = require('express');
const router = express.Router();
const db = require('../../../data/dbConfig')
const restrict = require('../auth/restricted-middleware')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../secrets.js').jwtSecret;
 


// get by id
// router.get('/', (req, res) => {
//     db('riders')
//     .select('rider_id', 'username')
//     .where({id})
//     .first()
//     .then(rider => {
//         res.status(200).json(rider)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })



router.get('/', restrict, (req, res) => {
    db('riders')
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



// update for phone or whatever



// delete acct if they want to 

module.exports = router;