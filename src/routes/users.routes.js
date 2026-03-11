import { postUser, getAllUsers, getUserById, updateUser, deleteUser, updateUserStatus, getTasksByUser } from '../controllers/users.controller.js';

import express from 'express';
const router = express.Router();

router.post('/users', postUser);

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id/estado', updateUserStatus);

router.get('/users/:userid/tasks', getTasksByUser);

export default router;