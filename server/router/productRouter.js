import express from "express";
import * as controller from '../controller/productController.js'

const router = express.Router();

router 
    .post('/detail', controller.getProduct)
    // .post('/new', controller.registerProduct)
    // .get('/all', controller.getList)
    // .post('/cartItems', controller.getCartItems);

export default router;