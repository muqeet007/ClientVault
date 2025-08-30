import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const protect =(req,res,next)=>
{

    try
    {
        const token=req.cookies.accesstoken

        if(!token)
        {
            return res.status(401).json({message:"Login First:No token provided"})
        }

        const user=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        req.user=user
        next()
    }

    catch(error)
    {
       if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired, please login again" });
        }
       
         return res.status(401).json({ message: "Invalid token" });
    }
   
}