import Sequelize from 'sequelize';

const databaseConfig = require('../config/config');

class Database {
  declare connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const database: Database = new Database();

export default database;