export const postTask = async (req,res) =>{
    try {
        const {id, titulo, descripcion, estado} = req.body;
        const task = await create(id, titulo, descripcion, estado);
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
        const {titulo, descripcion, estado} = req.body;
        const task = await update(id, titulo, descripcion, estado);
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
        const task = await deleteById(id);
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
        
    } catch (error) {
        
    }
}
export const getUsersByTask = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
export const deleteUserByTask = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
export const getTaskByFilter = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
