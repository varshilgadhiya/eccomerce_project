const Order = require("../models/Order")

exports.newOrder = async (req, res) => {
    console.log(req.body);
    const { user, cart, address, city, state,zipcode } = req.body;
    const addOrder = await Order.create({
      User: user,
      cart: cart,
      address: address,
      city: city,
      state: state,
      zip: zipcode,
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