const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    User: {
        type: Object
    },
    cart: {
        type: Array
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
    total: {
        type: Number
    },
    status:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)    