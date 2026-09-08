import express from 'express';
import { login, logout, profile, signup } from '../controller/authController.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';

const userRoute = express.Router();


userRoute.post('/login',login)
userRoute.post('/signup',signup)
userRoute.get('/profile', authMiddleware,profile)
userRoute.get('/logout', authMiddleware,logout)


export default userRoute;