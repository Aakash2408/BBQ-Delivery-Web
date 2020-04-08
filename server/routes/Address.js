const express = require("express")
const address = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Address = require("../models/Address")
address.use(cors())

process.env.SECRET_KEY = 'secret'

// address.get('/orders',(req,res)=>{
//     // Address.find({},function(err,allAddress){
//     //     if(err){
//     //         console.log(err);
            
//     //     }else{
//     //         res.render("",{address:allAddress})
//     //     }
//     // })
//     res.send("Working")
// })

address.post("/address", (req, res) => {
    const today = new Date()
    const addressInfo = {
        state: req.body.state,
        city: req.body.city,
        street_1: req.body.street_1,
        street_2: req.body.street_2,
        tel: req.body.tel
    }
    //  .then(userdata => {
           Address.create(addressInfo)
           .then(userdata => {
               res.json({ status: addressInfo.city + ' addressed' })
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
// address.post('/orders', (req, res) => {

//     .then(address => {
// const payload = {
//                         _id: user._id,
//                         street_1: user.street_1,
//                         city: user.city,
//                         state: user.email,
//                         tel:user.tel
//                     }
//                     let token = jwt.sign(payload, process.env.SECRET_KEY, {
//                         expiresIn: 1440
//                     })
//                     res.send(token)
//     })
//     })
// address.get('/orders',(req,res) =>{
//  var decoded =jwt.verify(req.headers['authorization'],process.env.Secret_Key)
 
// Address.findOne({
//     _id:decoded._id
// })
// .then(address => {
//     console.log(address)
// })
// })

module.exports = address
