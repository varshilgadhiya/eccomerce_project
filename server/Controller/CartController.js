const cart = require("../models/cart");
const product = require("../models/Product")

exports.AddToCart = async (req, res) => {
    console.log(req.body)
    const { user, item } = req.body
    var productitem = await product.findById(item).lean() 
    console.log(productitem);
    var available = await cart.findOne({ User: user }).lean()
    console.log(available);
    if (available) {
        var data = {
            User: available.User,
            cart: [...available.cart,productitem]
        }
        console.log(data);
        await cart.findOneAndReplace({ User: user }, data).lean()
            res.send("cart updated")
    }
    else {
        const newcart = cart.create({
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
        const myproduct = await cart.find({}).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.usercart = async (req, res) => {
    try {
        const id = req.params.id
        const myproduct = await cart.findOne({User:id}).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
exports.deletecart = async (req, res) => {
    try {
        const id = req.params.id
        const myproduct = await cart.findOneAndDelete({User:id}).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "faild" });

    };
}
