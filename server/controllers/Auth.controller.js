import { User } from "../models/User.model"
import bcrypt from 'bcrypt'



export const Login=async(req,res)=>
{
    // Logic=
    // 1)Fetch the name and email from the body (entered by the user).
    // 2)Search whether the user record exists in the database (via email as it is unique).Fetch
    // 3)Check whether the user exists.
    // 4)If the user record exists in the databse whether the password entered in correct

    // 1)
    const {email,password}=req.body

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
                return res.status(401).json({message:"Incorrect Password."})
            }

            // Login Success Message
            return res.status(200).json({
                message:"Login Successful.",
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                }
            })
        }

        else
        {
            // New Learning
            // Security concern: 404 for "user not found"
            // Returning 404 tells attackers that the email doesn’t exist.
            // return res.status(404).json({message:"User does not exist."}) ---> Wrong
            return res.status(401).json({message:"User does not exist."})
        }
    }

    //Error Handling
    catch(error)
    {
        return res.status(500).json({message:`Error:${error.message}`})
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



export const Logout=()=>
{

}