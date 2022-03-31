import { NextFunction, Request, Response } from "express";
import usersService from "../services/usersService"

export default class usersController {
  private userService: usersService;

  constructor() {
    this.userService = new usersService()
  }

  public registerUser = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      this.userService.registerUser(req.body);
      return res.status(201).json({message: 'User registered succesfull'})
    } catch (e) {
      next(e)
    }
  }
}