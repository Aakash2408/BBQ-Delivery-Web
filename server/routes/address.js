const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Address = require("../models/Address");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/address", (req, res) => {
    const today = new Date();
    const addressInfo = {
        state: req.body.state,
        city: req.body.city,
        street_1: req.body.street_1,
        street_2: req.body.street_2,
        telephone: req.body.telephone
    };
    //  .then(userdata => {
    Address.create(addressInfo)
        .then(userdata => {
            res.json({status: addressInfo.city + ' addressed'})
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    // console.log("Address is not available")
    // })
    //     .catch(err => {
    //     res.status(400).send('error: ' + err)
    // })


});
module.exports = router;
