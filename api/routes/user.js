import express from 'express';
import { testController, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();

userRouter.get('/test',testController);
userRouter.post('/update/:id',verifyToken,updateUser);

export default userRouter;