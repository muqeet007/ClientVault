import express from 'express'
import {Login,Register,Logout,refreshAccessToken} from '../controllers/Auth.controller.js'
const router=express.Router()



router.post('/login',Login)
router.post('/register',Register)
router.post('/logout',Logout)
router.post('/refresh-token',refreshAccessToken)

export default router