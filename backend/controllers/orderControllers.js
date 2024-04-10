const Order = require("../models/orderModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel");

// This is a create order API
exports.createOrder = async (req, res) => {
  try {
    const data = req.body;

    if (!data?.user) {
      throw new Error("User is required");
    }
    if (!data?.book) {
      throw new Error("Book is required");
    }

    const findBook = await Book.findById(data?.book);

    if (!findBook) {
      throw new Error("Book not found");
    }

    const findUser = await User.findById(data?.user);
    
    if (!findUser) {
      throw new Error("User not found");
    }

    const order = new Order(data);

    await order.save();
    res.status(201).send(order);
  } catch (e) {
    console.log(e);
    res.status(400).send(e?.message);
  }
};

// This is get User Order API
exports.getAllOrder = async (req, res) => {
  try {
    const order = await Order.find({});

    res.status(200).send(order);
  } catch (e) {
    res.status(400).send(e?.message);
  }
}