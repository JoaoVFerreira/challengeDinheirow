import userModel from "../database/models/userModel";
import INewUser from "../interfaces/registerUser";
import IUser from "../interfaces/user";

export default class usersService {
  constructor() {}

  public async registerUser(user: INewUser): Promise<void> {
    await userModel.create(user)
  }

  public async login(user: IUser) {
    const { email } = user;
    return userModel.findOne({ where: { email }})
  }
}