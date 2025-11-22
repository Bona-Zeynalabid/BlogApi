import express from 'express';
import { blogController } from '../domains/index.js';

const router = express.Router();

router.post('/', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);
router.get('/writer/:writerId', blogController.getBlogsByWriter);

export default router;