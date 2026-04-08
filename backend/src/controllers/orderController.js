import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { productId, name, email, phone, size, color } = req.body;

    const order = new Order({
      productId,
      name,
      email,
      phone,
      size,
      color,
      logo: req.file ? req.file.filename : "",
    });

    await order.save();

    res.json({
      success: true,
      message: "Order created",
      data: order,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error creating order",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("productId", "title price thumbnail") // 🔥 product details
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
