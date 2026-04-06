import { userModel } from '../models/users_models.js';

export const postUser = async (req, res) => {
    try {
        const { nombre_completo, correo } = req.body;
        if (!nombre_completo || !correo) {
            return res.status(400).json({
                success: false,
                message: 'El nombre y el correo son obligatorios',
                data: [],
                errors: []
            });
        }
        const newUser = await userModel.create({ nombre_completo, correo });
        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente',
            data: newUser,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al crear el usuario',
            data: [],
            errors: [error.message]
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener los usuarios',
            data: [],
            errors: [error.message]
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.getById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `Usuario con id ${id} no encontrado`,
                data: [],
                errors: []
            });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener el usuario',
            data: [],
            errors: [error.message]
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userModel.update(id, req.body);
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: `Usuario con id ${id} no encontrado`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Usuario actualizado correctamente',
            data: updatedUser,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar el usuario',
            data: [],
            errors: [error.message]
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const tieneTareas = await userModel.hasTasks(id);
        if (tieneTareas) {
            return res.status(409).json({
                success: false,
                message: 'No se puede eliminar el usuario porque tiene tareas asignadas.',
                data: [],
                errors: []
            });
        }
        const isDeleted = await userModel.destroy(id);
        if (!isDeleted) {
            return res.status(404).json({
                success: false,
                message: `Usuario con id ${id} no encontrado`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Usuario eliminado correctamente',
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al eliminar el usuario',
            data: [],
            errors: [error.message]
        });
    }
};

export const updateUserStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const updated = await userModel.updateStatus(id, estado);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: `Usuario con id ${id} no encontrado`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Estado del usuario actualizado correctamente',
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar el estado del usuario',
            data: [],
            errors: [error.message]
        });
    }
};

export const getTasksByUser = async (req, res) => {
    try {
        const { userid } = req.params;
        const tasks = await userModel.getAllTasksByUser(userid);
        res.status(200).json({
            success: true,
            message: 'Tareas del usuario obtenidas correctamente',
            data: tasks,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener las tareas del usuario',
            data: [],
            errors: [error.message]
        });
    }
};
