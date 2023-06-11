import express from "express";
import { getUsers,register,Login,Logout } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router()

router.get('/users',verifyToken,getUsers)
router.post('/register',register)
router.post('/login',Login)
router.get('/refresh',refreshToken)
router.delete('/logout',Logout)

export default router