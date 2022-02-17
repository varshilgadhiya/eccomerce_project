const { uploadsingle } = require("../middleware/cloudinary");
const { signAccessToken } = require("../middleware/jwt");
const product = require("../models/Product");
const fs = require("fs")

exports.allproduct = async (req, res) => {
    try {
        const myproduct = await product.find({}).lean();
        res.send(myproduct);
      } catch {
        res.status(400).json({ error: "get course faild" });
      }
    };
    
    

exports.addproduct = async (req, res) => {
    try {
        console.log(req.body);
        const { productname,productprize,productdiscription,productoffer,productcategory } = req.body;
    
        const createproduct = await product.create({
          name:productname,
          prize: productprize,
          discription: productdiscription,
          offer:productoffer,
          category:productcategory
        });
        await createproduct.save();
    
        if (createproduct) {
          res.json({ success: "course has been create", createproduct });
        }
      } catch {
        res.status(400).json({ error: "create course faild..." });
      }
    };

    
exports.updateproduct = async (req, res) => {
    try {
        res.json({ msg: "hii add product mongo" })
    } catch {
        res.status(400).json({ error: "Get user Faild...." })
    }
}

exports.deleteproduct = async (req, res) => {
    try {
        res.json({ msg: "hii mongo" })
    } catch {
        res.status(400).json({ error: "Get user Faild...." })
    }
}






