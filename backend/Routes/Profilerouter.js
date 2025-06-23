import express from 'express';
import verifyToken from '../Middleware/Verifytoken.js';


const router = express.Router();


router.get('/', verifyToken, (req, res) => {
  res.status(200).json({message:` welcome${req.user.email}, you are authorized`  });
});

export default router; 