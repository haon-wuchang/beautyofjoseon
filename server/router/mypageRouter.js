import express from "express";
import * as controller from '../controller/mypageController.js';

const router = express.Router();

router.post('/getMyinfo',controller.getMyinfo);






export default router;