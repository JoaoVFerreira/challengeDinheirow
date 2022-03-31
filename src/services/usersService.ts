import userModel from "../database/models/userModel";
import INewUser from "../interfaces/registerUser";

export default class usersService {
  constructor() {}

  public async registerUser(user: INewUser): Promise<void> {
    await userModel.create(user)
  }
}