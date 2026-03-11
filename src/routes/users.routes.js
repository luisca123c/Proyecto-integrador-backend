import { postUser, getUsers, getUserById, updateUser, deleteUser, updateUserStatus } from '../controllers/users.controller.js';

import express from 'express';
const router = express.Router();

router.post('/users', postUser);

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id/status', updateUserStatus);

export default router;