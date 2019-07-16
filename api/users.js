const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


// User Model
const User = require('../models/User');

// @route   POST api/users/register
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // console.log(req)
  // Simple validation

  var errors = {};
  if(!username || !email || !password) {
    console.log(username, email, password)
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        username,
        email,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              
              res.json({
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email
                }
              });

              // jwt.sign(
              //   { id: user.id },
              //   'jwtSecret',
              //   { expiresIn: 3600 },
              //   (err, token) => {
              //     if(err) throw err;
              //     res.json({
              //       token,
              //       user: {
              //         id: user.id,
              //         username: user.username,
              //         email: user.email
              //       }
              //     });
              //   }
              // )


            });
        })
      })
    })
});

module.exports = router;
