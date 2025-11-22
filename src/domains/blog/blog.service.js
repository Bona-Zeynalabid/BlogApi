import Blog from './blog.model.js';

export const createBlog = async (blogData) => {
  const blog = new Blog(blogData);
  return await blog.save();
};

export const getAllBlogs = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const blogs = await Blog.find()
    .populate('writerId', 'name')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments();

  return {
    blogs,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalBlogs: total
  };
};

export const getBlogById = async (id) => {
  const blog = await Blog.findById(id).populate('writerId', 'name');
  if (!blog) {
    throw new Error('Blog not found');
  }
  return blog;
};

export const updateBlog = async (id, updateData) => {
  const blog = await Blog.findByIdAndUpdate(
    id, 
    updateData, 
    { new: true, runValidators: true }
  ).populate('writerId', 'name');
  
  if (!blog) {
    throw new Error('Blog not found');
  }
  return blog;
};

export const deleteBlog = async (id) => {
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) {
    throw new Error('Blog not found');
  }
  return { message: 'Blog deleted successfully' };
};

export const getBlogsByWriter = async (writerId) => {
  return await Blog.find({ writerId })
    .populate('writerId', 'name')
    .sort({ createdAt: -1 });
};