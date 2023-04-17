import express from 'express';
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// routerobject 
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// login||POST
router.post('/login', loginController);

// Forgot Password || POST
router.post('/forgot-password', forgotPasswordController);

// test routes
router.get('/test', requireSignIn, isAdmin, testController);

// protected routh auth
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
});

export default router;