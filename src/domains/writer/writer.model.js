import mongoose from 'mongoose';

const writerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  }
}, {
  timestamps: true
});

export default mongoose.model('Writer', writerSchema);