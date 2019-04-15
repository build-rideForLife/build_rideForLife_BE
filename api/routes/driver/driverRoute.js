const express = require('express');
const router = express.Router();
const restrict = require('../auth/restricted-middleware')

router.get('/', restrict, (req, res) => {
    db('drivers')
    .then(drivers => {
        res.status(200).json(drivers)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;