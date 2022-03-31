"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const databaseConfig = require('../config/config');
class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new sequelize_1.default.Sequelize(databaseConfig);
    }
}
const database = new Database();
exports.default = database;
