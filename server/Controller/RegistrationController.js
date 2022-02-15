const registration = require("../models/registration");

exports.getinfo = async (req, res) => {
    try {
        res.json( { msg:"hii mongo"})
    } catch {
        res.status(400).json({ error:"Get user Faild...."})
    }
}

exports.createinfo = async (req, res) => {
    try {
        res.json( { msg:"hii mongo"})
    } catch {
        res.status(400).json({ error:"Get user Faild...."})
    }
}
    

exports.updateinfo = async (req, res) => {
    try {
        res.json( { msg:"hii mongo"})
    } catch {
        res.status(400).json({ error:"Get user Faild...."})
    }
}
    
    
        

exports.deleteinfo = async (req, res) => {
    try {
        res.json( { msg:"hii mongo"})
    } catch {
        res.status(400).json({ error:"Get user Faild...."})
    }
}
    
  



