import { ErrorRequestHandler } from 'express';

const allError: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status)
      .json({ message: error.message });
  }
  return res.status(500).json({ message: error.message });
};

export default allError;
