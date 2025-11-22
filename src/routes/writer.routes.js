import express from 'express';
import { writerController } from '../domains/index.js';

const router = express.Router();

router.post('/', writerController.createWriter);
router.get('/', writerController.getAllWriters);
router.get('/:id', writerController.getWriterById);
router.put('/:id', writerController.updateWriter);
router.delete('/:id', writerController.deleteWriter);

export default router;