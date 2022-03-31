import { 
  Model, 
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional 
} from 'sequelize';

import database from './';

class userModel extends Model<InferAttributes<userModel>, InferCreationAttributes<userModel>> {

  declare id: CreationOptional<number>;

  declare name: CreationOptional<string>;

  declare email: CreationOptional<string>;

  declare password: CreationOptional<string>;
}

userModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: database.connection,
    modelName: 'Users',
    tableName: 'Users',
    timestamps: false,
  },
);

export default userModel;