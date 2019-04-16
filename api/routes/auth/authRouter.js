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
        .insert(user)
        .then(ids => {
            const id = ids[0]
            
            db('riders')
            .where({phone: user.phone})
            .then(users =>{
                res.status(201).json(users)
            })
            .catch(error => {
                res.status(500).json(error)
            })
           })
        .catch(error => {
            res.status(500).json({ message: `there was an error registering this user ${error}`})
        })
      }
      if(user.driver === true){
        db('drivers')
        .insert(user)
        .then(ids => {
          const id = ids[0]
          db('drivers')
          .where({phone: user.phone})
          .then(drivers => {
            res.status(201).json(drivers)
          })
          .catch(error => {
            res.status(500).json(error)
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
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            driver: user.driver,
            phone: user.phone,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
    .catch(error => {
        res.status(500).json(error)
    })
  }
  if(driver === true){
    db('drivers')
    .where({phone, driver})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            driver: user.driver,
            phone: user.phone,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
    .catch(error => {
        res.status(500).json(error)
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
