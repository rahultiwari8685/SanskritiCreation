import express from "express";
import upload from "../middlewares/upload.js";

import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/saveProduct", upload.single("thumbnail"), createProduct);
router.get("/getAllProducts", getProducts);
// router.get("/:slug", getProduct);
router.get("/:id", getProduct);
router.put("/:id", upload.single("thumbnail"), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
