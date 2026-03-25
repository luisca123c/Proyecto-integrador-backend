import { userModel } from '../models/users_models.js'

export const postUser = async (req, res) => {
  try {
    const {id, nombre, correo, estado } = req.body;
    const User = await userModel.create(id, nombre, correo, estado);
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
    const users = await userModel.getAll();
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
    const user = await userModel.getById(id);
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
    const user = await userModel.update(id, nombre, correo, estado);
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
    const user = await userModel.destroy(id);
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
    const user = await userModel.updateStatus(id, estado);
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
    const user = await userModel.getAllTasksByUser(userid);
    res.status(user.status).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las tareas del usuario',
      error: error.message
    });
  }
}