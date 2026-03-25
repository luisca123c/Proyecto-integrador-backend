import { postUser, getAllUsers, getUserById, updateUser, deleteUser, updateUserStatus, getTasksByUser } from '../controllers/users.controller.js';

import express from 'express';
const userRouter = express.Router();

userRouter.post('/users', postUser);

userRouter.get('/users', getAllUsers);

userRouter.get('/users/:id', getUserById);

userRouter.put('/users/:id', updateUser);

userRouter.delete('/users/:id', deleteUser);

userRouter.patch('/users/:id/estado', updateUserStatus);

userRouter.get('/users/:userid/tasks', getTasksByUser);

export default userRouter;