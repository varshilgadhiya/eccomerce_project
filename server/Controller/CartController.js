const cartModel = require("../models/cart");
const product = require("../models/Product")

exports.AddToCart = async (req, res) => {
    console.log(req.body)
    const { user, item } = req.body
    var productitem = await product.findById(item).lean()
    console.log(productitem);
    var available = await cartModel.findOne({ User: user }).lean()
    console.log(available);
    if (available) {
        var data = {
            User: available.User,
            cart: [...available.cart, productitem]
        }
        console.log(data);
        await cartModel.findOneAndReplace({ User: user }, data).lean()
        res.send("cart updated")
    }
    else {
        const newcart = await cartModel.create({
            User: user,
            cart: [productitem]
        })
        if (newcart) {
            await newcart.save()
            res.send("new cart")
        }
    }
}

exports.allcart = async (req, res) => {
    try {
        const myproduct = await cartModel.find({}).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.onecart = async (req, res) => {
    try {
        const myproduct = await cartModel.findOne({ _id: id }).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.usercart = async (req, res) => {
    try {
        const id = req.params.id
        const myproduct = await cartModel.findOne({ User: id }).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.deletecart = async (req, res) => {
    try {
        const id = req.params.id
        const myproduct = await cartModel.findOneAndDelete({ User: id }).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.deleteItem = async (req, res) => {
    const id = req.params.id
    const index = req.params.index
    console.log(id, index);
    const mycart = await cartModel.findOne({ User: id }).lean();
    console.log(mycart);
    mycart.cart.splice(index, 1)
    console.log(mycart);
    if (mycart.cart.length === 0) {
        const cartempty = await cartModel.findOneAndDelete({ User: id }).lean();
        if (cartempty) {
            res.json({ msg: "success" })
        }
    }
    else {
        var deleteditem = await cartModel.findOneAndReplace({ User: id }, mycart)
        if (deleteditem) {
            res.json({ msg: "success" })
        }
        else {
            res.json({ msg: "fail" })
        }
    }
}
