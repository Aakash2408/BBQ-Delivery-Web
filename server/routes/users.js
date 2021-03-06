const express = require('express');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


secret_key = process.env.SECRET_KEY || 'secret';

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/register", (req, res) => {
    const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.json({status: user.email + ' registered'})
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.status(400).json({error: 'User already exists'})
            }
        })
        .catch(err => {
            res.status(400).send('error: ' + err)
        })
});


router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                };
                let token = jwt.sign(payload, secret_key, {
                    expiresIn: 1440
                });
                res.send({token : token, _id : payload._id});
            } else {
                res.status(400).json({error: 'Password does not match'});
            }
        } else {
            res.status(400).json({error: 'User does not exist'});
        }
    }).catch(err => {
        res.status(400).send('error: ' + err)
    })
});

router.get('/profile', (req, res) => {
    let decoded = jwt.verify(req.headers['authorization'], secret_key);
    User.findOne({
        _id: decoded._id
    }).then(user => {
        // console.log(user);
        if (user) {
            res.json(user);
        } else {
            res.send('User does not exist');
        }
    }).catch(err => {
        res.send('error: ' + err);
    })
});

module.exports = router;
