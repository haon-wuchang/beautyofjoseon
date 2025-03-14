import express from "express";
import * as controller from '../controller/productController.js'

const router = express.Router();

router 
    // .post('/detail', controller.getProduct) // 상품상세 페이지
    .post('/list', controller.getList) // product list 페이지
    // .post('/new', controller.registerProduct)
    // .post('/cartItems', controller.getCartItems);

export default router;