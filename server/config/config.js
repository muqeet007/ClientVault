import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


export const PORT=process.env.PORT


// MongoDB connection

export const connectDataBase=async()=>
{
    try
    {
        await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })

        console.log("Database Connection : SUCCESS");
     }

     catch
     {
        console.log("Database Connection : FAILED")
        process.exit(1)
     }  
}

