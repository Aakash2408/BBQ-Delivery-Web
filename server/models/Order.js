const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    placed_at: {
        type: Date,
        required: true,
        // path:pickUp_time
    },
    dropOff_time: {
        type: Date,
        required: true,
        // path:dropOff_time
    },
    user_id: {
        type: String,
        required: true
    },
    address_id: {
        type: String,
        required: true
    },
    pickup_id: {
        type: String,
        required: true
    },
    cart: [{
        product: {
            picture: {type: String},
            "id": {type: Number},
            "name": {type: String},
            "description": {type: String},
            "price": {type: Number},
            "inStock": {type: Number}
        },
        "quantity": {type: Number}
    }]
});

sample = {
    "product": {
        "picture": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcvxdzg03E3bGPAOsJXp27CVzjCD2AZKm8OvnlT_sp7c614GD8KtQQUG_Bcw0QQrnX0GnU-RUant4mqgUkmbTrfCgVRIw-QBYVEjt7jYanUVH5APtW5gAdYA&usqp=CAc",
        "id": 3,
        "name": "Prestige PPBW 004",
        "description": "",
        "price": 149,
        "inStock": 4
    },
    "quantity": 1
};

module.exports = Pickup = mongoose.model('order', OrderSchema);
