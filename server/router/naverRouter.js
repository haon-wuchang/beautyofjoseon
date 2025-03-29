import express from 'express';
import * as controller from'../controller/naverController.js';

const router = express.Router();

router.post('/callback', controller.naverLoginCallback);

export default router;
