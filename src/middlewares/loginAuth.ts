import { NextFunction, Request, Response } from "express";
import loginSchema from "../schemas/loginSchema";

const loginAuth = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    const [status, message] = error.message.split('|');
    const handleError = { status: Number(status), message };

    return next(handleError);
  }
  return next();
};

export default loginAuth;