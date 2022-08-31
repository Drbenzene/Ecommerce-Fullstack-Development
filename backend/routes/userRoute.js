import express from 'express'
import { registerUser, loginUser, updateUser } from "../contollers/userController.js";
import {protect} from '../middleware/auth.js'

const userRoute = express.Router();

userRoute.route('/register').post(registerUser);
userRoute.route('/login').post(loginUser);
userRoute.route('/cartUpdate').put(updateUser);

export default userRoute;