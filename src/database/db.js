import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/tarefas.db',
});

export { sequelize };
