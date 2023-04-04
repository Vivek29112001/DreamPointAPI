import express from 'express';
import { registerController , loginController } from '../controllers/authController.js';
// routerobject 
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// login||POST
router.post('/login', loginController);

export default router;