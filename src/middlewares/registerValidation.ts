import { Request, Response, NextFunction } from 'express';
import registerSchema from '../schemas/registerSchema';

const registerValidate = async (req: Request, _res: Response, next: NextFunction) => {
  const { error } = registerSchema.validate(req.body);

  if (error) {
    const [status, message] = error.message.split('|');
    const handleError = { status: Number(status), message };

    return next(handleError);
  }

  return next();
};

export default registerValidate;