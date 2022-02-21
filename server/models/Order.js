const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

const orderSchema = mongoose.Schema({
    User: {
        type: ObjectId,
        ref: "registration"
    },
    cart: {
        type: ObjectId,
        ref: "Cart"
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    status:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model('Cart', orderSchema)    