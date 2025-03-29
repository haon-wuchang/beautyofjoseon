import express from 'express';
import * as controller from '../controller/signupController.js';

const router = express.Router();

router.post('/idCheck', controller.getIdCheck)
      .post('/submit', controller.setSignup);  

export default router;