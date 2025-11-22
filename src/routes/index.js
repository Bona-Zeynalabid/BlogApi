import express from 'express';
import blogRoutes from './blog.routes.js';
import writerRoutes from './writer.routes.js';

const router = express.Router();

router.use('/blog', blogRoutes);
router.use('/writer', writerRoutes);

export default router;