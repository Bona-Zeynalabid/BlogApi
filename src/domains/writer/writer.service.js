import Writer from './writer.model.js';

export const createWriter = async (writerData) => {
  const writer = new Writer(writerData);
  return await writer.save();
};

export const getAllWriters = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const writers = await Writer.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Writer.countDocuments();

  return {
    writers,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalWriters: total
  };
};

export const getWriterById = async (id) => {
  const writer = await Writer.findById(id);
  if (!writer) {
    throw new Error('Writer not found');
  }
  return writer;
};

export const updateWriter = async (id, updateData) => {
  const writer = await Writer.findByIdAndUpdate(
    id, 
    updateData, 
    { new: true, runValidators: true }
  );
  
  if (!writer) {
    throw new Error('Writer not found');
  }
  return writer;
};

export const deleteWriter = async (id) => {
  const writer = await Writer.findByIdAndDelete(id);
  if (!writer) {
    throw new Error('Writer not found');
  }
  return { message: 'Writer deleted successfully' };
};