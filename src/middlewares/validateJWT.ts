require('dotenv').config();
import { NextFunction, Response } from "express";
import userModel from "../database/models/userModel";

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;


const jwtValidation = async (req: any, res: Response, next: NextFunction) => {
  const token = <string>req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, JWT_SECRET, (err: string) => {
      if (err) res.status(401).json({ message: 'Expired or invalid token' });
    });
    
    const decode = <any>jwt.verify(token, JWT_SECRET);

    const user = await userModel.findOne({ where: { email: decode.email } });

    req.user = user;

    next();
  } catch (e) {
    next(e);
  }
};

export default jwtValidation;
