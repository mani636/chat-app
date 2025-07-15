import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/Signup', signup);

router.get('/Login', login);

router.get('/Logout', logout);

export default router;
