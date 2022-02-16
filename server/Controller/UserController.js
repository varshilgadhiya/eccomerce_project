const { signAccessToken } = require("../middleware/jwt");
const User = require("../models/User");

exports.allUser = async (req, res) => {
    try {
        const alluser = await User.find({}).lean();
        res.send(alluser);
    } catch {
        res.status(400).json({ error: 'get user faild' })
    }
}

exports.addUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, phone, pass, conpass } = req.body
        const createuser = await User.create({
            name: name,
            email: email,
            phone: phone,
            role:"user",
            // pic: pic,
            pass: pass,
            conpass: conpass
        })
        createuser.save();
        if (createuser) {
            res.json({ success: "user has been create"});
        }
    } catch {
        res.status(400).json({ error: "create user faild..." });
    }
};




exports.Login = async (req, res) => {
    const { email, pass } = req.body
    const authUser = await User.findOne({ email: email, pass: pass })
    const accessToken = await signAccessToken(authUser)
    if (authUser) {
        res.json({
            "token": accessToken,
            "id": authUser._id,
            "role": authUser.role
        })
    }
    else {
        res.status(400).send({ msg: 'Error' })
    }
}




exports.updateUser = async (req, res) => {
    try {
        res.json({ msg: "hii mongo" })
    } catch {
        res.status(400).json({ error: "Get user Faild...." })
    }
}







exports.deleteUser = async (req, res) => {
    try {
        res.json({ msg: "hii mongo" })
    } catch {
        res.status(400).json({ error: "Get user Faild...." })
    }
}





