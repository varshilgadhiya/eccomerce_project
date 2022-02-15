const mongoose = require('mongoose');

const registrationSchema= mongoose.Schema({

    name:{
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:Number
    },
    pic :{
        type:String
    },
    pass :{
        type :String
    },
    
    conpass :{
        type:String
    }

    
},{timestamps:true} )

module.exports = mongoose.model('registration',registrationSchema)    