import express from "express";
import * as controller from '../controller/orderController.js';

const router = express.Router();

router
    .post('/all', controller.getCartAll); // 카트 전체 목록 가져오기

export default router;