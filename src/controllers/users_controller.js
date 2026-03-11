import { create, getAll } from '../services/users_service.js';

export const postUser = async (req, res) => {
  try {
    const {nombre, correo, contraseña } = req.body;
    const User = await create(nombre, correo, contraseña);
    res.status(201).json(User);
  }
  catch (error) {
    res.status(500).json({ 
      error: 'Error al crear el usuario',
      error: error.message
    });
  }
}
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  }
  catch (error) {
    res.status(500).json({
      error: 'Error al obtener los usuarios',
      error: error.message
    });
  }
}
export const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await getById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener el usuario',
      error: error.message
    });
  }
}
export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const {nombre, correo, contraseña} = req.body;
    const user = await update(id, nombre, correo, contraseña);
    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({
      error: 'Error al actualizar el usuario',
      error: error.message
    });
  }
}
export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await destroy(id);
    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({
      error: 'Error al eliminar el usuario',
      error: error.message
    });
  }
}
export const updateUserStatus = async (req, res) => {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const user = await updateStatus(id, status);
    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({
      error: 'Error al actualizar el estado del usuario',
      error: error.message
    });
    }  
  }
