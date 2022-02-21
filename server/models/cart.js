const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

const cartSchema= mongoose.Schema({
    User:{
        type:ObjectId,
        ref:"registration"
    },
    cart:{
        type:Array
    }
},{timestamps:true} )

module.exports = mongoose.model('Cart',cartSchema)    