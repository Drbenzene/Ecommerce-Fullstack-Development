import { fetchProduct, getProduct } from '../contollers/productController.js';
import express from 'express';

const productRoute = express.Router();

productRoute.route('/').get(fetchProduct);

productRoute.route("/all").get(getProduct);

export default productRoute;