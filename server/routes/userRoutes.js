import express from 'express';
import { registerUser, loginUser, adminLogin } from '../controllers/userController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

//Login an admin
router.post('/admin', adminLogin);

export default router;