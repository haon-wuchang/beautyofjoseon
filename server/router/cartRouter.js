import express from "express";
import * as controller from '../controller/cartController.js'

    const router = express.Router();

router
    .post('/items', controller.getItems) // 장바구니 리스트 가져오기
    .post('/add', controller.addCart) // 새로운 아이템 저장
    .put('/updateQty', controller.updateQty) // 아이템 수량 업데이트
    ; 

export default router;
