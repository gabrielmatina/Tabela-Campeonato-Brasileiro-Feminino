import { NextFunction, Request, Response } from 'express';

const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

const FieldsValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (email && !regex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default FieldsValidate;
