import express from "express";
import * as controller from '../controller/mypageController.js';

const router = express.Router();

router.post('/getMyinfo',controller.getMyinfo)
.post('/updateInfo',controller.updateInfo)
.post('/deleteUser',controller.deleteAllMyinfo);






export default router;