import mongoose, { Mongoose } from 'mongoose'


const Schema=mongoose.Schema

const DocumentSchema=new Schema({
    filename:
    {
        type:String,
        required:true,
        trim:true,
    },

    owner:
    {
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },

    sharedWith:
    {
        type:Schema.Types.ObjectId,
        ref:'User',
    },

    status:
    {
        type:String,
        enum:['Pending','Approved','Rejected'],
        default:'Pending',
    },

    createdAt:
    {
        type:Date,
        default:Date.now,
    },

    fileId:
    {
        type:Schema.Types.ObjectId,
        required:true,
    },

    shareLink:
    {
        type:String,
        default:null,
    },

    shareLinkExpiry:
    {
        type:Date,
        default:null,
    },

    size:
    {
        type:Number,
        required:true,
    },

    mimeType:
    {
        type:String,
        required:true,
    },
})

export const Document=mongoose.model('Document',DocumentSchema)