const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Address = require("../models/Address")
users.use(cors())



users.post("/Address", (req, res) => {
    const today = new Date()
    const addressInfo = {
        state: req.body.state,
        city: req.body.city,
        street_1: req.body.street_1,
        street_2: req.body.street_2,
        tel: req.body.tel
    }
     .then(userdata => {
           Address.create(addressInfo)
           .then(userdata => {
               res.json({
                   ({ status: user.city + ' addressed' })
               })
               .catch(err => {
                            res.send('error: ' + err)
                        })
           })
            .catch(err => {
            res.status(400).send('error: ' + err)
        })

}
}

module.exports = users