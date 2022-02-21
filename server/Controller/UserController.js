const { uploadsingle } = require("../middleware/cloudinary");
const { signAccessToken } = require("../middleware/jwt");
const User = require("../models/User");
const fs = require("fs")

exports.allUser = async (req, res) => {
    try {
        const alluser = await User.find({}).lean();
        res.send(alluser);
    } catch {
        res.status(400).json({ error: 'get user faild' })
    }
}
exports.oneUser = async (req, res) => {
    try {
        const id = req.params.id
        const oneuser = await User.findById(id).lean();
        res.send(oneuser);
    } catch {
        res.status(400).json({ error: 'get user faild' })
    }
}
exports.newuser = async (req, res) => {
    try {
      var id = req.params.id;
      const mycourse = await Course.findOne({ _id: id }).lean();
      res.send(mycourse);
    } catch {
      res.status(400).json({ error: "get course faild" });
    }
  };
  exports.cre

exports.addUser = async (req, res) => {
    // try {
    console.log(req.body)
    console.log(req.file)
    const { name, email, phone, pass, conpass } = req.body
    const pic = req.file
    if (pic.path) {
        var path = await uploadsingle(pic.path)
    }
    fs.unlink(pic.path, () => {
        res.send({
            status: "200",
            responseType: "string",
            response: "success"
        })
    })
    console.log(path)
    const createuser = await User.create({
        name: name,
        email: email,
        phone: phone,
        role: "user",
        pic: path,
        pass: pass,
        conpass: conpass
    })
    await createuser.save();
    if (createuser) {
        res.json({ success: "user has been create" });
    }
    // } catch {
    //     res.status(400).json({ error: "create user faild..." });
    // }
};




exports.Login = async (req, res) => {
    try {
        const { email, pass } = req.body
        const authUser = await User.findOne({ email: email, pass: pass })
        const accessToken = await signAccessToken(authUser)
        console.log(authUser);
        if (authUser) {
            res.json({
                "token": accessToken,
                "id": authUser._id,
                "role": authUser.role,
            })
        }
    } catch {
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

exports.newprofile = async (req,res) =>{
    try {
        const id = req.params.id
        const {name,email} = req.body


        
         var newprofile = {
             username:name,
             useremail:email
         }
          
         const editproduct = await User.findOneAndReplace({_id:id},newprofile)
         if (editproduct) {
            res.send({ success: "updated" })
          }
      
        } catch {
          res.status(400).json({ error: "Get user Faild...." })
        }
      }
      



