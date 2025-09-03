import { Router } from 'express';
import { tasks } from './data.js';
import { db } from '../database/db.js';
const router = Router();

router.get('/', (req, res) => {
  db.all('SELECT * FROM tarefas', [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.get('SELECT * FROM tarefas WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ erro: err.message });
    if (!row) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(row);
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.run('DELETE FROM tarefas WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    if (this.changes === 0) return res.status(404).json({ erro: 'Tarefanão encontrada' });
    res.status(204).send();
  });
});

router.post('/', (req, res) => {
  const { titulo } = req.body;
  db.run('INSERT INTO tarefas (titulo) VALUES (?)', [titulo], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ id: this.lastID, titulo, concluida: 0 });
  });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, concluida } = req.body;
  db.run('UPDATE tarefas SET titulo = ?, concluida = ? WHERE id = ?', [titulo, concluida ? 1 : 0, id], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    if (this.changes === 0) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ id, titulo, concluida });
  });
});

export { router };
