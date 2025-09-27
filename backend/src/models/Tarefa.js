import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Tarefa = sequelize.define(
  'Tarefa',
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'tarefas',
    timestamps: false,
  }
);

export { Tarefa };
