const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PickupSchema = new Schema({
    pickup_date: {
        type: String,
        required:true
         },
    dropoff_date: {
        type: String,
        required:true
    }
    })

module.exports = Pickup = mongoose.model('pickup', PickupSchema)