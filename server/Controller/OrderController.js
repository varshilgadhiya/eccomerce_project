const Order = require("../models/Order")
const User = require("../models/User")

exports.newOrder = async (req, res) => {
    console.log(req.body);
    const { user, cart, address, city, state,zipcode } = req.body;
    var total = 0
    cart.map((value) => {
      total += value.price
    })
    console.log(total)
    const userdata = await User.findById(user).lean()
    const addOrder = await Order.create({
      User: userdata,
      cart: cart,
      address: address,
      city: city,
      state: state,
      zip: zipcode,
      total:total,
      status:"placed"
    });
    await addOrder.save();
    if (addOrder) {
      res.json({ success: "order has been create" });
    }
};
exports.allOrder = async (req, res) => {
  try {
      const allOrders = await Order.find({}).lean();
      res.send(allOrders);
  } catch {
      res.status(400).json({ error: "get course faild" });

  };
}