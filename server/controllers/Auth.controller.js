import { User } from "../models/User.model"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const refreshAccessToken=async(req,res)=>
{
    // Logic=
    // 1)Fetch the refresh token from the cookies stored in the users device.
    // 2)Verify the refresh token wrt to the SECRET_KEY
    // 3)Generate the new access token
    // 4)Save the new access token in the cookie


    try
    {
        // 1)
        const refreshToken=req.cookies?.refreshToken


        if(!refreshToken)
        {
            return res.status(401).json({message:"Refresh token missing"})
        }

        //Checking whether the refresh token exists in the DataBase
        const user=await User.findOne({refreshToken})

        if(!user)
        {
            return res.status(403).json({message:"Invalid refresh token"})
        }

        jwt.verify
        (
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err,decoded)=>
            {
                if(err)
                {
                    return res.status(403).json({message:"Invalid refresh token"})
                }
            }
        )

        // 3)
        const newAccessToken = jwt.sign(
          { id: user._id, email: user.email, role: user.role },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "15m" }
        );

        res.cookie("accessToken", newAccessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 15 * 60 * 1000,
        });

        return res.status(200).json({ message: "New access token issued" });
      }

    catch (error) {
    console.error("Refresh error:", error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
}



export const Login=async(req,res)=>
{
    // Logic=
    // 1)Fetch the name and email from the body (entered by the user).
    // 2)Search whether the user record exists in the database (via email as it is unique).Fetch
    // 3)Check whether the user exists.
    // 4)If the user record exists in the databse whether the password entered in correct

    // 1)
    const {email,password}=req.body
    // Check if email & password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
    try
    {
        // 2)
        const user=await User.findOne({email})

        // 3)
        if (user)
        {
            // 4)
            const isMatch=await bcrypt.compare(password,user.password)

            if(!isMatch)
            {
                return res.status(401).json({message:"Invalid Credentials."})
            }

            else
            {
                const accesstoken=jwt.sign
                (
                    {
                    userid:user._id,
                    useremail:user.email,
                    userrole:user.role
                    },
                    ACCESS_TOKEN_SECRET,
                    {expiresIn:'30m'}
                    
                )

                const refreshtoken=jwt.sign
                (
                    {
                        id:user._id,
                        email:user.email,
                        role:user.role
                    },
                    REFRESH_TOKEN_SECRET,
                    {expiresIn:'7d'}
                )

                // Saving refresh token in Database.
                user.refreshToken=refreshToken;
                await user.save();

                // Send tokens as cookies
                res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: false, // true in production
                sameSite: "Strict",
                maxAge: 15 * 60 * 1000
                });

                res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
                });



                // // Login Success Message
                return res.status(200).json({
                    message:"Login Successful.",
                    user: {
                        id: user._id,
                        email: user.email,
                        role: user.role,
                    }
                })
            }
        }


        else
        {
            // New Learning
            // Security concern: 404 for "user not found"
            // Returning 404 tells attackers that the email doesn’t exist.
            // return res.status(404).json({message:"User does not exist."}) ---> Wrong
            return res.status(401).json({message:"Invalid Credentials"})
        }
    }

    //Error Handling
    catch(error)
    {
        console.error(`Error:${error.message}`)
        return res.status(500).json({message:"Something went wrong"})
    }

}

export const Register=async(req,res)=>
{
    // Logic=
        // 1)Fetch details entered by the user from the req.body (Details:name,role,email,password)
        // 2)Check the user with the same email already exists in the database (since email is unique).
        // 3)Hash the password entered by the user
        // 4)Save the new-user record in the database.

    try
    {
        // 1)
        const {name,role,email,password}=req.body

        // 2
        const user=await User.findOne({email})

        if(user)
        {
            // New Learning:
            // 409 Conflict because:
                // The request itself is valid.
                // But it cannot be completed since the resource (email/user) already exists.
            return res.status(409).json({message:"User already exists."})
        }

        // 3)
        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=new User({email,password:hashedPassword,role,name})

        // 4)
        await newUser.save()

        return res.status(201).json({message:"User has been created successfully."})

    }

    catch(error)
    {
        return res.status(500).json({
            message:`Error:${error.message}`
        })
    }
}



export const Logout=async(req,res)=>
{
    // Logic=
    // 1)Fetch the refresh token saved in the cookie
    // 2) If a refresh token exists, remove it from DB
     // 3) Clear both cookies

    try
    {
        const refreshToken=req.cookies?.refreshToken

        if(refreshToken)
        {
            await User.updateOne(
                {refreshToken},
                {$unset:{refreshToken:1}}
            )
        }

        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")

        return res.status(200).json(
            {
                message:"Logged out successfully"
            }
        )
    }
    catch(error)
    {
        return res.status(500).json(
            {
                message:"Error logging out"
            }
        )
    }
}