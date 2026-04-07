import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, default: 0 },

    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],

    content: { type: Object, default: {} },

    thumbnail: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
