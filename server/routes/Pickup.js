const express = require("express")
const pickup = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Pickup = require("../models/Pickup")
pickup.use(cors())



pickup.post("/pickup", (req, res) => {
    const today = new Date()
    const pickupInfo = {
        pickUp_time: req.body.pickUp_time,
        dropOff_time: req.body.dropOff_time
    }
    //  .then(userdata => {
           Pickup.create(pickupInfo)
           .then(pickupdata => {
               res.json({ status: pickupInfo.dropOff_time + ' is the Dropoff date' })
                 })
               .catch(err => {
                            res.send('error: ' + err)
                        })
        // console.log("Address is not available")
        // })
        //     .catch(err => {
        //     res.status(400).send('error: ' + err)
        // })


})
module.exports = pickup