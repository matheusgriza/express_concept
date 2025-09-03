import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

const db = new sqlite.Database('./src/database/tarefas.db');

db.serialize(() => {
  db.run(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    concluida INTEGER DEFAULT 0
  )
`);
});

export { db };
