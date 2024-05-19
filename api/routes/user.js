import express from 'express';
import { testController } from '../controllers/user.js';

const userRouter=express.Router();

userRouter.get('/test',testController);

export default userRouter;