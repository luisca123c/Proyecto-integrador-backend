import { taskModel } from '../models/tasks_models.js'

export const postTask = async (req,res) =>{
    try {
        const {title, ussers_id, description, status, priority} = req.body;
        if (!title || !ussers_id || !description || !status || !priority) {
            return res.status(400).json({
                success: false,
                message: 'Faltan datos obligatorios para crear la tarea',
                data:[],
                errors: [],
            });
        }
        const newTask = await taskModel.create(title, ussers_id, description, status, priority);

        res.status(201).json({
            success: true,
            message: 'Tarea creada correctamente',
            data: newTask,
            errors: [],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al crear la tarea',
            data: [],
            errors: [error.message],
        });
    }
}
export const getAllTasks = async (req,res) =>{
    try {
        const tasks = await taskModel.getAll();
        res.status(200).json({
            success: true,
            message: 'Tareas obtenidas correctamente',
            data: tasks,
            errors: [],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener las tareas',
            data: [],
            errors: [error.message],
        });
    }
}
export const getTaskById = async (req,res) =>{
    try {
        const {id} = req.params;
        const task = await taskModel.getById(id);
        res.status(200).json(
            {
                success: true,
                message: 'Tarea obtenida correctamente',
                data: task,
                errors: [],
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al obtener la tarea',
            data: [],
            errors: [error.message]
        });
    }
}
export const updateTask = async (req,res) =>{
    try {
        const {id} = req.params;
        const updatedTask = await taskModel.update(Number(id), req.body);
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: [],
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tarea actualizada correctamente',
            data: updatedTask,
            errors: [],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar la tarea',
            data: [],
            errors: [error.message],
        });
    }
}
export const deleteTask = async (req,res) =>{
    try {
        const {id} = req.params;
        const isdeleted = await taskModel.delete(Number(id));
        if (!isdeleted) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: [],
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tarea eliminada correctamente',
            data: [],
            errors: [],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al eliminar la tarea',
            data: [],
            errors: [error.message]
        });
    }
}
export const updateTaskStatus = async (req,res) =>{
    try {
        const {id} = req.params;
        const {estado} = req.body;
        const updateStatusTask = await taskModel.updateStatus(id, estado);
        if (!updateStatusTask) {
            return res.status(404).json({
                success: false,
                message: `Tarea con id ${id} no encontrada`,
                data: [],
                errors: [],
            });
        }
        res.status(200).json({
            success: true,
            message: 'Estado de la tarea actualizado correctamente',
            data: updateStatusTask,
            errors: [],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno al actualizar el estado de la tarea',
            data: [],
            errors : [error.message],
        });
    }
}
export const assingTask = async (req,res) =>{
    try {
        const { taskid } = req.params;
        const { userid } = req.body;
        const taskassing = await taskModel.assingTaskToUser(taskid, userid);
        res.status(taskassing.status).json(taskassing);
    } catch (error) {
        res.status(500).json({
            message: 'Error al asignar la tarea',
            error: error.message
        });
    }
}
export const getUsersByTask = async (req,res) =>{
    try {
        const { taskid } = req.params;
        const task = await taskModel.getAllUsersByTask(taskid);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios de la tarea',
            error: error.message
        })
    }
}
export const deleteUserByTask = async (req,res) =>{
    try {
        const { taskid, userid } = req.params;
        const task = await taskModel.destroyUserByTask(taskid, userid);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar los usuarios de la tarea',
            error: error.message
        })
    }
}
export const getTaskByFilter = async (req,res) =>{
    try {
         const {estado, prioridad, usuario, fecha_inicio, fecha_fin} = req.query;
         const task = await taskModel.getAllTaskByFilter(estado, prioridad, usuario, fecha_inicio, fecha_fin);
         res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al filtrar las tareas',
            error: error.message
        })
    }
}
