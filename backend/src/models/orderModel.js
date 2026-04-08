import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    name: String,
    email: String,
    phone: String,
    size: String,
    color: String,
    logo: String,
  },
  { timestamps: true },
);

export default mongoose.model("Order", orderSchema);
