import mongoose from 'mongoose';

const storySchema = new mongoose.Schema(
  {
    content: { 
        type: String,
        required: true
    },
    userid: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
        },
    date: {
          type: Date,
          required: true
    }    
  }
);
const Story = mongoose.model('Story', storySchema);
export default Story;