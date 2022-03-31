'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      pokemon_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
      },
      PokedexNumber: {
        type: Sequelize.INTEGER,
        field: 'Pokedex_Number'
      },
      Img_name: {
        type: Sequelize.INTEGER,
      },
      Generation: {
        type: Sequelize.INTEGER,
      },
      EvolutionStage: {
        type: Sequelize.INTEGER,
        field: 'Evolution_Stage'
      },
      Evolved: {
        type: Sequelize.INTEGER,
      },
      FamilyID: {
        type: Sequelize.INTEGER,
      },
      Cross_Gen: {
        type: Sequelize.INTEGER,
      },
      Type_1: {
        type: Sequelize.STRING,
      },
      Type_2: {
        type: Sequelize.STRING,
      },
      Weather_1: {
        type: Sequelize.STRING,
      },
      Weather_2: {
        type: Sequelize.STRING,
      },
      STAT_TOTAL: {
        type: Sequelize.INTEGER,
      },
      ATK: {
        type: Sequelize.INTEGER,
      },
      DEF: {
        type: Sequelize.INTEGER,
      },
      STA: {
        type: Sequelize.INTEGER,
      },
      Legendary: {
        type: Sequelize.INTEGER,
      },
      Aquireable: {
        type: Sequelize.INTEGER,
      },
      Spawns: {
        type: Sequelize.INTEGER,
      },
      Regional: {
        type: Sequelize.INTEGER,
      },
      Raidable: {
        type: Sequelize.INTEGER,
      },
      Hatchable: {
        type: Sequelize.INTEGER,
      },
      Shiny: {
        type: Sequelize.INTEGER,
      },
      Nest: {
        type: Sequelize.INTEGER,
      },
      New: {
        type: Sequelize.INTEGER,
      },
      NotGettable: {
        type: Sequelize.INTEGER,
      },
      Future_Evolve: {
        type: Sequelize.INTEGER,
      },
      CPOINTS39: {
        type: Sequelize.INTEGER,
        field: '100_CP__39',
      },
      CPOINTS40: {
        type: Sequelize.INTEGER,
        field: '100_CP__40',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons');
  }
};