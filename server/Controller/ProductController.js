const product = require("../models/Product");

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
    const { productname, productprice, productdiscription, productoffer, productcategory } = req.body;

    const createproduct = await product.create({
      name: productname,
      price: productprice,
      discription: productdiscription,
      offer: productoffer,
      category: productcategory
    });
    await createproduct.save();
    if (createproduct) {
      res.json({ success: "product has been create" });
    }
  } catch {
    res.status(400).json({ error: "create product faild..." });
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
  const id= req.params.id
  console.log(id);
  const deleteproduct = await product.findOneAndDelete({ _id: id })
  if (deleteproduct) {
    res.json({ success: "product has been delete" })
  }

}







