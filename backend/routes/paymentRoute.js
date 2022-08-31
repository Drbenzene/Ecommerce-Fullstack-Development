import { makePayment } from "../contollers/paymentController.js";
import express from "express";

const paymentRoute = express.Router();

paymentRoute.route("/").post(makePayment);

export default paymentRoute;