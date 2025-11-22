import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  writerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Writer',
    required: [true, 'Writer ID is required']
  }
}, {
  timestamps: true
});

export default mongoose.model('Blog', blogSchema);