import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, categories, content } = req.body;

    const thumbnail = req.file ? req.file.filename : "";

    const product = await Product.create({
      title,
      price,
      categories: categories ? JSON.parse(categories) : [],
      content: content ? JSON.parse(content) : "",
      thumbnail,
    });

    return res.status(201).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("categories", "name") // ✅ removed slug
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate(
      "categories",
      "name slug",
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Get Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// export const getProduct = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const product = await Product.findOne({ slug }).populate(
//       "categories",
//       "name slug",
//     );

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   } catch (error) {
//     console.error("Get Product Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

export const updateProduct = async (req, res) => {
  try {
    const { title, price, categories, content } = req.body;

    const updateData = {
      title,
      price,
      categories: JSON.parse(categories),
      content: JSON.parse(content),
    };

    if (req.file) updateData.thumbnail = req.file.filename;

    const updated = await Product.findByIdAndUpdate(
      req.params._id,
      updateData,
      {
        new: true,
      },
    );

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
