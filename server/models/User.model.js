import mongoose from 'mongoose'


const Schema=mongoose.Schema


const UserSchema= new Schema(
    {
        email:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },

        password:
        {
            type:String,
            required:true,
        },

        role:
        {
            type:String,
            enum:['Freelance','Client','Admin'],
            required:true,
        },

        name:
        {
            type:String,
            required:true,
            trim:true,
        },

        createdAt:
        {
            type:Date,
            default:Date.now,
        },

        refreshToken:
        {
            type:String,
            default:null,
        },
    }
)


export const User=mongoose.model('User',UserSchema)




