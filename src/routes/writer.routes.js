import express from 'express';
import { writerController } from '../domains/index.js';

const router = express.Router();

router.post('/', writerController.createWriter);
router.get('/', writerController.getAllWriters);
router.get('/:id', writerController.getWriterById);
router.put('/:id', writerController.updateWriter);
router.delete('/:id', writerController.deleteWriter);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const writer = await Writer.findOne({ email });
    
    if (!writer) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }
    
    // Simple password check (in production, use bcrypt)
    if (writer.password !== password) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {
        writerId: writer._id,
        name: writer.name,
        email: writer.email
      }
    });}catch(err){
        res.send(err);
    }});

export default router;
