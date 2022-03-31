import { Request } from "express";

export default interface RequestJWT extends Request {
  user: any;
}
