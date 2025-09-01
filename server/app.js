import express from 'express'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/Auth.route.js'


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())



app.use('/auth',authRoutes)

export default app





