import * as writerService from './writer.service.js';

export const createWriter = async (req, res, next) => {
  try {
    const writer = await writerService.createWriter(req.body);
    res.status(201).json({
      success: true,
      data: writer
    });
  } catch (error) {
    next(error);
  }
};

export const getAllWriters = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await writerService.getAllWriters(page, limit);
    res.status(200).json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
};

export const getWriterById = async (req, res, next) => {
  try {
    const writer = await writerService.getWriterById(req.params.id);
    res.status(200).json({
      success: true,
      data: writer
    });
  } catch (error) {
    next(error);
  }
};

export const updateWriter = async (req, res, next) => {
  try {
    const writer = await writerService.updateWriter(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: writer
    });
  } catch (error) {
    next(error);
  }
};

export const deleteWriter = async (req, res, next) => {
  try {
    const result = await writerService.deleteWriter(req.params.id);
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    next(error);
  }
};