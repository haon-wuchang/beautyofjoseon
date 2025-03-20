import express from "express";
import * as multicontroller from '../controller/adminController.js';
import * as controller from '../controller/adminSingleController.js';
import * as uploadcontroller from '../controller/productUploadController.js';

    const router = express.Router();

router.post('/',controller.fileUpload);
router.post('/multiple',multicontroller.fileUploadMultiple);
router.post('/dbupload',uploadcontroller.registerProduct );
router.post('/dbDescUpload',uploadcontroller.registerProductDesc );

console.log(controller);

export default router;
