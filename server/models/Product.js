const mongoose = require('mongoose');

const productSchema= mongoose.Schema({

    name:{
        type:String
    },
    prize: {
        type:Number
    },
    discription: {
        type:Number
    },
     offer:{
        type:String
    },
    category :{
        type:String
    },
    

},{timestamps:true} )

module.exports = mongoose.model('Product',productSchema)    