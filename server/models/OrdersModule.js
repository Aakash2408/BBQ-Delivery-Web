const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema =require("./models/Address");
const PickupSchema =require("./models/Pickup");
const OrdersModuleSchema = new Schema({
   AddressSchema,PickupSchema,OrderedProducts:[ ],
    user_id:{
       type:String,
       required:true
    }
   
   
   });

module.exports = OrdersModule = mongoose.model(' ordersmodule', OrderSchema);
