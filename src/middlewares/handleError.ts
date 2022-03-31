import { NextFunction, Request, Response } from 'express';


function appError(err: Error, _req: Request, res: Response, _next: NextFunction) {
  return res.status(500).json({ message: err.message });
}

export default appError;
