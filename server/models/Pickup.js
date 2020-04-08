const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PickupSchema = new Schema({
    pickUp_time: {
        type:Date,
        required:true,
        path:pickUp_time
       
        
         },
    dropOff_time: {
        type:Date,
        required:true,
        path:dropOff_time
       
    }
    })

module.exports = Pickup = mongoose.model('pickup', PickupSchema)