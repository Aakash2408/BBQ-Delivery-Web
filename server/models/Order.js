const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema =require("./models/Address");
const PickupSchema =require("./models/Pickup");
const OrderSchema = new Schema({
   AddressSchema,PickupSchema,OrderedProducts:[ ],
    user_id:{
       type:String,
       required:true
    }
   
   
   });

module.exports = Order = mongoose.model(' Order', OrderSchema);
