import express from 'express';
import {signupvalidation, loginvalidation} from '../Middleware/Authvalidation.js';
import { signup, login} from '../Controllers/Authcontroller.js';
import verifyToken from '../Middleware/Verifytoken.js';

const router = express.Router();

router.post('/login', loginvalidation, login);
router.post('/signup', signupvalidation, signup);

export default router;