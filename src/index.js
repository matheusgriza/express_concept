import express from 'express';
import { router } from './routes/tasks.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', router);

app.listen(PORT, (req, res) => {
  console.log('Listening in PORT ', PORT);
});

app.get('/', (req, res) => {
  res.send('Welcome to my backend');
});


