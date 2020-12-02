import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('banco_teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;