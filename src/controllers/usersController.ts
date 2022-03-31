import { NextFunction, Request, Response } from "express";
import usersService from "../services/usersService"
import userModel from "../database/models/userModel";

const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

export default class usersController {
  private userService: usersService;

  constructor() {
    this.userService = new usersService()
  }

  public registerUser = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const { email } = req.body;

      const userAlreadyExist = await userModel.findOne<userModel>({ where: { email } })

      if (userAlreadyExist) return res.status(409).json({ message: 'User already registered' })
  
      const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);

      this.userService.registerUser(req.body);
      
      return res.status(201).json({ token })
    } catch (e) {
      next(e)
    }
  }

  public loginUser = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
      try {
        const { email } = req.body;
    
        const verifyUser = await userModel.findOne<userModel>({ where: { email } });
    
        if (!verifyUser) return res.status(400).json({ message: 'Invalid fields' });
    
        const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
    
        return res.status(200).json({ token });
      } catch (e) {
        next(e)
      }

  }
}