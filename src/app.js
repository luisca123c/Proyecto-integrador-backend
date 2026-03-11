import express from 'express';
import usersRoutes from './routes/users.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/api', usersRoutes);
app.use('/api', tasksRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});