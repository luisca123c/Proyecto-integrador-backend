import { taskModel } from '../models/tasks_models.js';

export const postTask = async (req, res) => {
    try {
        const { titulo, descripcion, estado, prioridad } = req.body;
        if (!titulo || !descripcion || !estado || !prioridad) {
            return res.status(400).json({
                success: false,
                message: 'Faltan datos obligatorios para crear la tarea',
                data: [],
                errors: []
            });
        }
        const newTask = await taskModel.create({ titulo, descripcion, estado, prioridad });
        res.status(201).json({
            success: true,
            message: 'Tarea creada correctamente',
            data: newTask,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al crear la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAll();
        res.status(200).json({
            success: true,
            message: 'Tareas obtenidas correctamente',
            data: tasks,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener las tareas',
            data: [],
            errors: [error.message]
        });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskModel.getById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tarea obtenida correctamente',
            data: task,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskModel.update(Number(id), req.body);
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tarea actualizada correctamente',
            data: updatedTask,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const isDeleted = await taskModel.delete(Number(id));
        if (!isDeleted) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tarea eliminada correctamente',
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al eliminar la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const updated = await taskModel.updateStatus(id, estado);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'Estado de la tarea actualizado correctamente',
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar el estado de la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const assingTask = async (req, res) => {
    try {
        const { taskid } = req.params;
        const { userid } = req.body;
        const assigned = await taskModel.assingTaskToUser(taskid, userid);
        if (!assigned) {
            return res.status(404).json({
                success: false,
                message: 'No se pudo asignar el usuario a la tarea',
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: `Usuario ${userid} asignado a la tarea ${taskid} correctamente`,
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al asignar la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const getUsersByTask = async (req, res) => {
    try {
        const { taskid } = req.params;
        const users = await taskModel.getAllUsersByTask(taskid);
        res.status(200).json({
            success: true,
            message: 'Usuarios de la tarea obtenidos correctamente',
            data: users,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener los usuarios de la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const deleteUserByTask = async (req, res) => {
    try {
        const { taskid, userid } = req.params;
        const removed = await taskModel.destroyUserByTask(taskid, userid);
        if (!removed) {
            return res.status(404).json({
                success: false,
                message: 'No se encontró la asignación a eliminar',
                data: [],
                errors: []
            });
        }
        res.status(200).json({
            success: true,
            message: `Usuario ${userid} removido de la tarea ${taskid} correctamente`,
            data: [],
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al eliminar el usuario de la tarea',
            data: [],
            errors: [error.message]
        });
    }
};

export const getTaskByFilter = async (req, res) => {
    try {
        const { estado, prioridad, usuario, fecha_inicio, fecha_fin } = req.query;
        const tasks = await taskModel.getAllTaskByFilter(estado, prioridad, usuario, fecha_inicio, fecha_fin);
        res.status(200).json({
            success: true,
            message: 'Tareas filtradas obtenidas correctamente',
            data: tasks,
            errors: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al filtrar las tareas',
            data: [],
            errors: [error.message]
        });
    }
};
