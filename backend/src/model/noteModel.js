const Sequelize = require('sequelize');
const database = require('../database');

const NoteModel = database.define('note', {

    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
});

module.exports = NoteModel;