import mongoose from 'mongoose'


const Schema=mongoose.Schema

const ActivityLogSchema = new Schema({
  user: 
  {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  document: 
  {
    type: Schema.Types.ObjectId,
    ref: 'Document',
    required: true,
  },

  action:
   {
    type: String,
    enum: ['Uploaded', 'Shared', 'Approved', 'Rejected', 'Downloaded', 'Revoked'],
    required: true,
  },

  createdAt:
   {
    type: Date,
    default: Date.now,
  },
});

export const ActivityLog = mongoose.model('ActivityLog', ActivityLogSchema);