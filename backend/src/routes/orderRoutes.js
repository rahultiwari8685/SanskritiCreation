import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.single("logo"), createOrder);
router.get("/", getAllOrders);

export default router;
