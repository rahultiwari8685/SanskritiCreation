import express from "express";
import { createOrder } from "../controllers/orderController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.single("logo"), createOrder);

export default router;
