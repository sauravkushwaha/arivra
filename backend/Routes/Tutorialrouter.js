import express from 'express';
import { createTutorial, getAllTutorials } from '../Controllers/Tutorialcontroller.js';
import verifyToken from '../Middleware/Verifytoken.js';
import { isAdmin } from '../Middleware/adminMiddleware.js';

const router = express.Router();

router.post('/add', verifyToken, isAdmin, createTutorial);//admin only
router.get('/all', getAllTutorials);

export default router;