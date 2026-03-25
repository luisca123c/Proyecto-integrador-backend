import pool from '../config/db.js';

export const taskModel = {
    create : async (newTask) => {
        const {title,usuarios, description, status, priority} = newTask;
        const [result] = await pool.query(
            "INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)",
            [title, description, status, priority],
        );
        for (const usuario of usuarios) {
             await pool.query(
                "INSERT INTO task_users (task_id, user_id) VALUES (?, ?)",
                [result.insertId, usuario],
            );
        }
        const [createdTask] = await pool.query("SELECT * FROM tasks WHERE id = ?", [result.insertId]);
        const [assignedUsers] = await pool.query(
            "SELECT u.id, u.name FROM users u JOIN task_users tu ON u.id = tu.user_id WHERE tu.task_id = ?",
            [result.insertId]
        );
        return createdTask[0], assignedUsers[0];
    },
    getAll: async () => {
        const [rows] = await pool.query("SELECT * FROM tasks");
        return rows;
    },
    getById: async (id) => {
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        return rows[0];
    },
    update: async (id, updatedTask) => {
        const {title,usuarios, description, status, priority} = updatedTask;
        const [result] = await pool.query(
            "UPDATE tasks SET title = ?, description = ?, status = ?, priority = ? WHERE id = ?",
            [title, description, status, priority, id]
        );
        if (result.affectedRows === 0) {
            return null;
        }
        for (const usuario of usuarios) {
            await pool.query(
                "INSERT INTO task_users (task_id, user_id) VALUES (?, ?)",
                [id, usuario],
            );
        }
        const [updatedTask] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        const [assignedUsers] = await pool.query(
            "SELECT u.id, u.name FROM users u JOIN task_users tu ON u.id = tu.user_id WHERE tu.task_id = ?",
            [id]
        );
        return updatedTask[0], assignedUsers[0];
    },
    delete: async (id) => {
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
        return result.affectedRows > 0;
    },
    
}


export const updateStatus = async (id, estado) => {
    return{
        status : 200,
        message : `Estado de tarea con id ${id} actualizado a ${estado}`
    }
}
export const assingTaskToUser = async (taskid, userid) => {
    return{
        status : 200,
        message : `Usuario con id ${userid} asignado a tarea con id ${taskid}`
    }
}
export const getAllUsersByTask = async (taskid) => {
    return{
        status : 200,
        message : `Usuarios asignados a tarea con id ${taskid} obtenidos correctamente`
    }
}
export const destroyUserByTask = async (taskid, userid) => {
    return{
        status : 200,
        message : `Usuario con id ${userid} eliminado de tarea con id ${taskid}`
    }
}
export const getAllTaskByFilter = async (estado, prioridad, usuario, fecha_inicio, fecha_fin) => {
    return{
        status : 200,
        message : `Tareas filtradas por 
        estado: ${estado} 
        prioridad: ${prioridad} 
        usuario: ${usuario} 
        rango de fechas: entre ${fecha_inicio} y ${fecha_fin} 
        obtenidas correctamente`
    }
}