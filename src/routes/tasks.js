import { Router } from 'express';
import { Tarefa } from '../models/Tarefa.js';
const router = Router();

router.get('/', async (req, res) => {
  const tasks = await Tarefa.findAll();
  return res.json(tasks);
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await Tarefa.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Documento não encontrado' });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await Tarefa.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: 'Documento deletado com sucesso' });
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  const { titulo } = req.body;
  try {
    const tarefa = await Tarefa.create({ titulo: titulo });
    return res.status(201).json(tarefa);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, concluida } = req.body;
  try {
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ messsage: 'Documento não encontrado' });

    tarefa.titulo = titulo ?? tarefa.titulo;
    tarefa.concluida = concluida ?? tarefa.concluida;
    await tarefa.save();

    return res.status(200).json(tarefa);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

export { router };
