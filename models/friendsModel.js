import mongoose from 'mongoose';

const friendsSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    friendid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    requeststatus: {type: String}
  },
  {
    timestamps: true,
  }
);
const Friends = mongoose.model('Friends', friendsSchema);
export default Friends;