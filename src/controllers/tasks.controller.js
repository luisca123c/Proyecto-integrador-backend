import { create, getAll, getById, update, destroy, updateStatus, assingTaskToUser, getAllUsersByTask, destroyUserByTask, getAllTaskByFilter } from '../models/tasks_models.js'

export const postTask = async (req,res) =>{
    try {
        const {id, titulo,usuarios, descripcion, estado, prioridad, fecha_registro} = req.body;
        const task = await create(id, titulo,usuarios, descripcion, estado, prioridad, fecha_registro);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear la tarea',
            error: error.message
        });
    }
}
export const getAllTasks = async (req,res) =>{
    try {
        const tasks = await getAll();
        res.status(tasks.status).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las tareas',
            error: error.message
        });
    }
}
export const getTaskById = async (req,res) =>{
    try {
        const {id} = req.params;
        const task = await getById(id);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la tarea',
            error: error.message
        });
    }
}
export const updateTask = async (req,res) =>{
    try {
        const {id} = req.params;
        const {titulo,usuarios, descripcion, estado, prioridad, fecha_registro} = req.body;
        const task = await update(id, titulo,usuarios, descripcion, estado, prioridad, fecha_registro);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar la tarea',
            error: error.message
        });
    }
}
export const deleteTask = async (req,res) =>{
    try {
        const {id} = req.params;
        const task = await destroy(id);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar la tarea',
            error: error.message
        });
    }
}
export const updateTaskStatus = async (req,res) =>{
    try {
        const {id} = req.params;
        const {estado} = req.body;
        const task = await updateStatus(id, estado);
        res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el estado de la tarea',
            error : error.message
        });
    }
}
export const assingTask = async (req,res) =>{
    try {
        const { taskid } = req.params;
        const { userid } = req.body;
        const task = await assingTaskToUser(taskid, userid);
        res.status(task.status).json(task);
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
        const task = await getAllUsersByTask(taskid);
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
        const task = await destroyUserByTask(taskid, userid);
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
         const task = await getAllTaskByFilter(estado, prioridad, usuario, fecha_inicio, fecha_fin);
         res.status(task.status).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Error al filtrar las tareas',
            error: error.message
        })
    }
}
