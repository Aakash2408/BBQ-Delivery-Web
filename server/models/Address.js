const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    state: {
        type: String,
        required:true
         },
    city: {
        type: String,
        required:true
    },
    street_1: {
        type: String,
        required: true
    },
    street_2: {
        type: String,
        required: false
    },
    tel: {
        type: String,
       required:true
    }
    })

module.exports = Address = mongoose.model('address', AddressSchema)