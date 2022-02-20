const product = require("../models/Product");
const {uploadsingle} = require('../middleware/cloudinary')

exports.allproduct = async (req, res) => {
  try {
    const myproduct = await product.find({}).lean();
    res.send(myproduct);
  } catch {
    res.status(400).json({ error: "get course faild" });
  }
};



exports.addproduct = async (req, res) => {
    console.log(req.body);
    console.log(req.files);
    const { productname, productprice, productdiscription, productoffer, productcategory } = req.body;
    const productpic = req.files
    var path = []
    for (let i = 0; i < productpic.length; i++) {
      var img = productpic[i].path
      var imglink = await uploadsingle(img)
      path.push(imglink)
      console.log(path)
    }
    const createproduct = await product.create({
      name: productname,
      price: productprice,
      discription: productdiscription,
      offer: productoffer,
      category: productcategory,
      pic: path
    });
    await createproduct.save();
    if (createproduct) {
      res.json({ success: "product has been create" });
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
  const id = req.params.id
  const deleteproduct = await product.findByIdAndDelete(id).lean()
  if (deleteproduct) {
    res.json({ success: "product has been delete" })
  }
  else {
    res.json({ error: "product has not delete" })
  }
}







