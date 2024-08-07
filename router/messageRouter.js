import express from 'express';
import { SendMessage } from '../controller/messageController.js';

const router = express.Router();

router.post("/send",SendMessage)

export default router;