import express from 'express';
import cors from 'cors';
import { router } from './routes/tasks.js';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);

app.get('/dados', (req, res) => {
  res.json({ message: 'CORS working properly' });
});

app.use('/tasks', router);

app.listen(PORT, (req, res) => {
  console.log('Listening in PORT ', PORT);
});

app.get('/', (req, res) => {
  res.send('Welcome to my backend');
});
