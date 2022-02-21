const cart = require("../models/cart");

exports.AddToCart = async (req, res) => {
    console.log(req.body)
    const { user, item } = req.body
    var available = await cart.findOne({ User: user }).lean()
    console.log(available);
    if (available) {
        var data = {
            User: available.User,
            cart: [...available.cart,item]
        }
        console.log(data);
        await cart.findOneAndReplace({ User: user }, data).lean()
            res.send("cart updated")
    }
    else {
        const newcart = cart.create({
            User: user,
            cart: [item]
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
        res.status(400).json({ error: "get course faild" });

    };
}
exports.usercart = async (req, res) => {
    try {
        const id = req.params.id
        const myproduct = await cart.findOne({User:id}).lean();
        res.send(myproduct);
    } catch {
        res.status(400).json({ error: "get course faild" });

    };
}
