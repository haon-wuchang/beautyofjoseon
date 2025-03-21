import express from "express";
import * as controller from '../controller/productController.js'

const router = express.Router();

router 
    .post('/list', controller.getList) // product list 페이지
    .post('/detail', controller.getProduct) // 상품상세 페이지
    .post('/addWishList', controller.setWishList) // 위시리스트 추가
    .post('/getWishList', controller.getWishList);

export default router;