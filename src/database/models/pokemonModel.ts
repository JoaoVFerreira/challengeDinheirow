import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import database from './';

class PokemonModel extends Model<InferAttributes<PokemonModel>, InferCreationAttributes<PokemonModel>> {
  declare pokemon_id: CreationOptional<number>;

  declare Name: CreationOptional<string>;

  declare PokedexNumber: CreationOptional<number>;

  declare Img_name: CreationOptional<number>;

  declare Generation: CreationOptional<number>;

  declare EvolutionStage: CreationOptional<number>;;

  declare Evolved: CreationOptional<number>;;

  declare FamilyID: CreationOptional<number>;;

  declare Cross_Gen: CreationOptional<number>;;

  declare Type_1: CreationOptional<string | void>;

  declare Type_2: CreationOptional<string | void>;

  declare Weather_1: CreationOptional<string | void>; 

  declare Weather_2: CreationOptional<string | void>;

  declare STAT_TOTAL: CreationOptional<number>;;

  declare ATK: CreationOptional<number>;;

  declare DEF: CreationOptional<number>;;

  declare STA: CreationOptional<number>;;

  declare Legendary: CreationOptional<number>;;

  declare Aquireable: CreationOptional<number>;;

  declare Spawns: CreationOptional<number>;;

  declare Regional: CreationOptional<number>;;

  declare Raidable: CreationOptional<number>;;

  declare Hatchable: CreationOptional<number>;;

  declare Shiny: CreationOptional<number>;;

  declare Nest: CreationOptional<number>;;

  declare New: CreationOptional<number>;;

  declare NotGettable: CreationOptional<number>;;

  declare Future_Evolve: CreationOptional<number>;;

  declare CPOINTS40: CreationOptional<number>;;

  declare CPOINTS39: CreationOptional<number>;;
}

PokemonModel.init(
  {
    pokemon_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    PokedexNumber: {
      type: DataTypes.INTEGER,
      field: 'Pokedex_Number'
    },
    Img_name: {
      type: DataTypes.INTEGER,
    },
    Generation: {
      type: DataTypes.INTEGER,
    },
    EvolutionStage: {
      type: DataTypes.INTEGER,
      field: 'Evolution_Stage'
    },
    Evolved: {
      type: DataTypes.INTEGER,
    },
    FamilyID: {
      type: DataTypes.INTEGER,
    },
    Cross_Gen: {
      type: DataTypes.INTEGER,
    },
    Type_1: {
      type: DataTypes.STRING,
    },
    Type_2: {
      type: DataTypes.STRING,
    },
    Weather_1: {
      type: DataTypes.STRING,
    },
    Weather_2: {
      type: DataTypes.STRING,
    },
    STAT_TOTAL: {
      type: DataTypes.INTEGER,
    },
    ATK: {
      type: DataTypes.INTEGER,
    },
    DEF: {
      type: DataTypes.INTEGER,
    },
    STA: {
      type: DataTypes.INTEGER,
    },
    Legendary: {
      type: DataTypes.INTEGER,
    },
    Aquireable: {
      type: DataTypes.INTEGER,
    },
    Spawns: {
      type: DataTypes.INTEGER,
    },
    Regional: {
      type: DataTypes.INTEGER,
    },
    Raidable: {
      type: DataTypes.INTEGER,
    },
    Hatchable: {
      type: DataTypes.INTEGER,
    },
    Shiny: {
      type: DataTypes.INTEGER,
    },
    Nest: {
      type: DataTypes.INTEGER,
    },
    New: {
      type: DataTypes.INTEGER,
    },
    NotGettable: {
      type: DataTypes.INTEGER,
    },
    Future_Evolve: {
      type: DataTypes.INTEGER,
    },
    CPOINTS39: {
      type: DataTypes.INTEGER,
      field: '100_CP__39',
    },
    CPOINTS40: {
      type: DataTypes.INTEGER,
      field: '100_CP__40',
    },
  },
  {
    sequelize: database.connection,
    modelName: 'Pokemons',
    tableName: 'Pokemons',
    timestamps: false,
  },
);

export default PokemonModel;