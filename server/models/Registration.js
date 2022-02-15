const mongoose = require('mongoose');

const registrationSchema= mongoose.Schema({

    Firstname: {
        type: String
    },
    Lastname: {
        type:String
    },
    Email: {
        type:String
    },

    Phone: {
        type:Number
    },

    pass :{
        type :String
    },

    
},{timestamps:true} )

module.exports = mongoose.model('registration',registrationSchema)    