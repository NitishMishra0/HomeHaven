import express from 'express';
import { deleteUser, testController, updateUser , getUserListings , getUser} from '../controllers/user.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();

userRouter.get('/test',testController);
userRouter.post('/update/:id',verifyToken,updateUser);
userRouter.delete('/delete/:id',verifyToken,deleteUser)
userRouter.get('/listings/:id',verifyToken,getUserListings);
userRouter.get('/:id',verifyToken,getUser);
 
export default userRouter;