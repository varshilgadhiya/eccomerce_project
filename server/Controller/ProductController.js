const product = require("../models/Product");
const {uploadsingle} = require('../middleware/cloudinary')

exports.allproduct = async (req, res) => {
  try {
    const myproduct = await product.find({}).lean();
    res.send(myproduct);
  } catch {
    res.status(400).json({ error: "get course faild" });

  };
}

exports.oneproduct = async (req, res) => {
  try {
    var id = req.params.id;
    const myproduct = await product.findById(id).lean();
    res.send(myproduct);
  } catch {
    res.status(400).json({ error: "get course faild" });
  }
};


exports.oneproduct = async (req, res) => {
  try {
    var id = req.params.id;
    const myproduct = await product.findById(id).lean();
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
    console.log(req.body);
    const id = req.params.id
    console.log(id);
    const { productprice, productoffer } = req.body
    const oldVal = await product.findById(id).lean()
    console.log(oldVal);
    var newVal = {
      name: oldVal.name,
      price: productprice,
      discription: oldVal.discription,
      offer: productoffer,
      category: oldVal.category,
      pic: oldVal.pic
    }
    console.log(newVal)
    const updateproductdata = await product.findOneAndReplace({ _id: id }, newVal)
    if (updateproductdata) {
      res.send({ success: "updated" })
    }

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










