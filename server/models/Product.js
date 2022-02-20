const mongoose = require('mongoose');

const productSchema= mongoose.Schema({

    name:{
        type:String
    },
    price: {
        type:Number
    },
    discription: {
        type:String
    },
     offer:{
        type:Number
    },
    category :{
        type:String
    },
    

},{timestamps:true} )

module.exports = mongoose.model('Product',productSchema)    