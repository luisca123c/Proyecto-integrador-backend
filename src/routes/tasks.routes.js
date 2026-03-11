import { postTask, getAllTasks, getTaskById, updateTask, deleteTask, updateTaskStatus, assingTask, getUsersByTask, deleteUserByTask, getTaskByFilter } from '../controllers/tasks.controller.js'

import express from 'express';
const router = express.Router();

router.post('/tasks', postTask);

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTaskById);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

router.patch('/tasks/:id/estado', updateTaskStatus);

router.post('/tasks/:taskid/assing', assingTask);

router.get('/tasks/:taskid/users', getUsersByTask);

router.delete('/tasks/:taskid/users/:userid', deleteUserByTask);

router.get('/tasks/filter', getTaskByFilter);



export default router;
