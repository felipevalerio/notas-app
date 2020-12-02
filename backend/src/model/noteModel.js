import Sequelize from 'sequelize';
import database from '../database';

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

export default NoteModel;