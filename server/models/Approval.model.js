import mongoose, { Mongoose } from 'mongoose'


const Schema=mongoose.Schema

const ApprovalSchema = new Schema({
  document:
  {
    type: Schema.Types.ObjectId,
    ref: 'Document',
    required: true,
  },

  user: 
  {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  status:
   {
    type: String,
    enum: ['Approved', 'Rejected'],
    required: true,
  },
  comment:
   {
    type: String,
    trim: true,
    default: '',
  },
  createdAt:
   {
    type: Date,
    default: Date.now,
  },
})

export const Approval = mongoose.model('Approval', ApprovalSchema);    