"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("./"));
class PokemonModel extends sequelize_1.Model {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
}
PokemonModel.init({
    pokemon_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
    },
    PokedexNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Pokedex_Number'
    },
    Img_name: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Generation: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    EvolutionStage: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Evolution_Stage'
    },
    Evolved: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FamilyID: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Cross_Gen: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Type_1: {
        type: sequelize_1.DataTypes.STRING,
    },
    Type_2: {
        type: sequelize_1.DataTypes.STRING,
    },
    Weather_1: {
        type: sequelize_1.DataTypes.STRING,
    },
    Weather_2: {
        type: sequelize_1.DataTypes.STRING,
    },
    STAT_TOTAL: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ATK: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    DEF: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    STA: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Legendary: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Aquireable: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Spawns: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Regional: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Raidable: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Hatchable: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Shiny: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Nest: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    New: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NotGettable: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Future_Evolve: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CPOINTS39: {
        type: sequelize_1.DataTypes.INTEGER,
        field: '100_CP__39',
    },
    CPOINTS40: {
        type: sequelize_1.DataTypes.INTEGER,
        field: '100_CP__40',
    },
}, {
    sequelize: _1.default.connection,
    modelName: 'Pokemons',
    tableName: 'Pokemons',
    timestamps: false,
});
exports.default = PokemonModel;
