import express from 'express';
import { signinController, signupController ,googleController, signOut} from '../controllers/auth.js';

const authRouter=express.Router();

authRouter.post("/signup",signupController); 
authRouter.post("/signin",signinController);
authRouter.post('/google',googleController);
authRouter.get('/signout',signOut);

export default authRouter;