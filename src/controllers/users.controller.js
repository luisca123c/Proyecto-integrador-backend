import { create, getAll, getById, update, destroy, updateStatus, getAllTasksByUser } from '../models/users_models.js'

export const postUser = async (req, res) => {
  try {
    const {id, nombre, correo, estado } = req.body;
    const User = await create(id, nombre, correo, estado);
    res.status(User.status).json(User);
  }
  catch (error) {
    res.status(500).json({ 
      message: 'Error al crear el usuario',
      error: error.message
    });
  }
}
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(users.status).json(users);
  }
  catch (error) {
    res.status(500).json({
      message: 'Error al obtener los usuarios',
      error: error.message
    });
  }
}
export const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await getById(id);
    res.status(user.status).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el usuario',
      error: error.message
    });
  }
}
export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const {nombre, correo, estado} = req.body;
    const user = await update(id, nombre, correo, estado);
    res.status(user.status).json(user);
  }
  catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el usuario',
      error: error.message
    });
  }
}
export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await destroy(id);
    res.status(user.status).json(user);
  }
  catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el usuario',
      error: error.message
    });
  }
}
export const updateUserStatus = async (req, res) => {
  try {
    const {id} = req.params;
    const {estado} = req.body;
    const user = await updateStatus(id, estado);
    res.status(user.status).json(user);
  }
  catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el estado del usuario',
      error: error.message
    });
    }  
  }
export const getTasksByUser = async (req, res) => {
  try {
    const {userid} = req.params;
    const user = await getAllTasksByUser(userid);
    res.status(user.status).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las tareas del usuario',
      error: error.message
    });
  }
}