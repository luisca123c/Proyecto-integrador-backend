import { postTask, getAllTasks, getTaskById, updateTask, deleteTask, updateTaskStatus, assingTask, getUsersByTask, deleteUserByTask, getTaskByFilter } from '../controllers/tasks.controller.js'

import express from 'express';

const taskRouter = express.Router();

taskRouter.post('/tasks', postTask);

taskRouter.get('/tasks', getAllTasks);

taskRouter.get('/tasks/filter', getTaskByFilter);

taskRouter.get('/tasks/:id', getTaskById);

taskRouter.put('/tasks/:id', updateTask);

taskRouter.delete('/tasks/:id', deleteTask);

taskRouter.patch('/tasks/:id/estado', updateTaskStatus);

taskRouter.post('/tasks/:taskid/assing', assingTask);

taskRouter.get('/tasks/:taskid/users', getUsersByTask);

taskRouter.delete('/tasks/:taskid/users/:userid', deleteUserByTask);




export default taskRouter;
