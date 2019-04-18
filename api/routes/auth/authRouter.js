const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret = require('../../secrets.js').jwtSecret;
const restricted = require('./restricted-middleware');

const db = require('../../../data/dbConfig.js');

//Register User/Driver
router.post('/register', (req, res) => {
      let user = req.body;
      const hash = bcrypt.hashSync(user.password, 10) 
        user.password = hash;

        if(user.driver === false){
        db('riders')
        .where({phone: user.phone})
        .then(rider => {
          if(rider.length > 0){
           return res.status(400).json({error: "This phone number exists"})
          }
          db('riders')
          .insert(user)
          .then(newRider => {
            return res.status(201).json(newRider)
          })
          .catch(error => {
            console.error(error)
            return res.status(500).json({error: "There was an error adding the rider to the database"})
          })
       })
    }
      if(user.driver === true){
        db('drivers')
        .where({phone: user.phone})
        .then(driver => {
          if(driver.length > 0){
           return res.status(400).json({error: "This phone number exists"})
          }
          db('drivers')
          .insert(user)
          .then(newDriver => {
            return res.status(201).json(newDriver)
          })
          .catch(error => {
            console.error(error)
            return res.status(500).json({error: "There was an error adding the driver to the database"})
          })
        })
      }
    })

 //Login User/Driver
router.post('/login', (req, res) => {
    let { phone, password, driver} = req.body;

    if(driver === false){
    db('riders')
    .where({phone, driver})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          return res.status(200).json({
            message: `Welcome ${user.username}!`,
            rider_id: user.riders_id,
            driver: user.driver,
            phone: user.phone,
            token,
          });
        } else {
          return res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
    .catch(error => {
        return res.status(500).json(error)
    })
  }
  if(driver === true){
    db('drivers')
    .where({phone, driver})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          return res.status(200).json({
            message: `Welcome ${user.username}!`,
            driver_id: user.driver_id,
            driver: user.driver,
            phone: user.phone,
            token,
          });
        } else {
          return res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
    .catch(error => {
        return res.status(500).json(error)
    })
  }
})


const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        phone: user.phone,
        driver: user.driver
    };
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = router;
