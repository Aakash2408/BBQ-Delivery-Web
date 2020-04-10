const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Pickup = require("../models/Pickup");
const Address = require("../models/Address");
const Order = require("../models/Order");


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

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
        .then(address => {
            res.json({
                status: addressInfo.city + ' addressed',
                address_id: address._id
            })
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
router.post("/get_address", (req, res) => {

    Address.find({
        _id: req.body.address_id
    }).then(data => {
        // console.log(data);
        if (data) {
            res.json(data);
        } else {
            res.send('Address does not exist');
        }
    }).catch(err => {
        res.send('error: ' + err);
    })
});

router.post("/pickup", (req, res) => {
    const today = new Date();
    const pickupInfo = {
        pickUp_time: req.body.pickUp_time,
        dropOff_time: req.body.dropOff_time
    };
    //  .then(userdata => {
    Pickup.create(pickupInfo)
        .then(pickupdata => {
            res.json({
                status: pickupInfo.dropOff_time + ' is the Dropoff date',
                pickup_id: pickupdata._id

            })
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

router.post("/get_pickup", (req, res) => {

    Pickup.find({
        _id: req.body.pickup_id
    }).then(data => {
        // console.log(data);
        if (data) {
            res.json(data);
        } else {
            res.send('Pickup does not exist');
        }
    }).catch(err => {
        res.send('error: ' + err);
    })
});

router.post("/place_order", (req, res) => {
    const today = new Date();
    //  .then(userdata => {
    req.body.created =  today;
    Order.create(req.body)
        .then(orderdata => {
            res.json({
                status: orderdata._id + ' is the order id',
                order_id: orderdata._id

            })
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
router.post("/get_orders", (req, res) => {

    Order.find({
        user_id: req.body.user_id
    }).sort({dropOff_time: 'desc'}).then(data => {
        // console.log(data);
        if (data) {
            res.json(data);
        } else {
            res.send('Orders does not exist');
        }
    }).catch(err => {
        res.send('error: ' + err);
    })
});
module.exports = router;

