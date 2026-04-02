import pool from '../config/db.js';

export const taskModel = {
    create: async (newTask) => {
        const { titulo, descripcion, estado, prioridad } = newTask;
        const [result] = await pool.query(
            "INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)",
            [titulo, descripcion, estado, prioridad]
        );
        const [rows] = await pool.query(
            `SELECT id, title AS titulo, description AS descripcion,
                    status AS estado, priority AS prioridad,
                    created_at AS fecha_registro
             FROM tasks WHERE id = ?`,
            [result.insertId]
        );
        return rows[0];
    },
    getAll: async () => {
        const [rows] = await pool.query(
            `SELECT t.id, t.title AS titulo, t.description AS descripcion,
                    t.status AS estado, t.priority AS prioridad,
                    t.created_at AS fecha_registro,
                    GROUP_CONCAT(tu.id_user) AS userIds_raw
             FROM tasks t
             LEFT JOIN tasks_users tu ON t.id = tu.id_task
             GROUP BY t.id`
        );
        return rows.map(t => ({
            ...t,
            userIds: t.userIds_raw ? t.userIds_raw.split(',') : [],
            userIds_raw: undefined
        }));
    },
    getById: async (id) => {
        const [rows] = await pool.query(
            `SELECT id, title AS titulo, description AS descripcion,
                    status AS estado, priority AS prioridad,
                    created_at AS fecha_registro
             FROM tasks WHERE id = ?`,
            [id]
        );
        return rows[0];
    },
    update: async (id, updatedTask) => {
        const { titulo, descripcion, estado, prioridad, userIds = [] } = updatedTask;
        const [result] = await pool.query(
            "UPDATE tasks SET title = ?, description = ?, status = ?, priority = ? WHERE id = ?",
            [titulo, descripcion, estado, prioridad, id]
        );
        if (result.affectedRows === 0) return null;
        await pool.query("DELETE FROM tasks_users WHERE id_task = ?", [id]);
        for (const userid of userIds) {
            await pool.query(
                "INSERT INTO tasks_users (id_task, id_user) VALUES (?, ?)",
                [id, userid]
            );
        }
        const [rows] = await pool.query(
            `SELECT id, title AS titulo, description AS descripcion,
                    status AS estado, priority AS prioridad,
                    created_at AS fecha_registro
             FROM tasks WHERE id = ?`,
            [id]
        );
        return rows[0];
    },
    delete: async (id) => {
        await pool.query("DELETE FROM tasks_users WHERE id_task = ?", [id]);
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
        return result.affectedRows > 0;
    },
    updateStatus: async (id, estado) => {
        const [result] = await pool.query(
            "UPDATE tasks SET status = ? WHERE id = ?",
            [estado, id]
        );
        return result.affectedRows > 0;
    },
    assingTaskToUser: async (taskid, userid) => {
        const [result] = await pool.query(
            "INSERT INTO tasks_users (id_task, id_user) VALUES (?, ?)",
            [taskid, userid]
        );
        return result.affectedRows > 0;
    },
    getAllUsersByTask: async (taskid) => {
        const [rows] = await pool.query(
            `SELECT u.id, u.full_name AS nombre_completo, u.email AS correo, u.active AS activo
             FROM users u
             JOIN tasks_users tu ON u.id = tu.id_user
             WHERE tu.id_task = ?`,
            [taskid]
        );
        return rows;
    },
    destroyUserByTask: async (taskid, userid) => {
        const [result] = await pool.query(
            "DELETE FROM tasks_users WHERE id_task = ? AND id_user = ?",
            [taskid, userid]
        );
        return result.affectedRows > 0;
    },
    getAllTaskByFilter: async (estado, prioridad, usuario, fecha_inicio, fecha_fin) => {
        let query = `SELECT DISTINCT t.id, t.title AS titulo, t.description AS descripcion,
                            t.status AS estado, t.priority AS prioridad,
                            t.created_at AS fecha_registro
                     FROM tasks t
                     LEFT JOIN tasks_users tu ON t.id = tu.id_task
                     WHERE 1=1`;
        const params = [];
        if (estado)       { query += " AND t.status = ?";       params.push(estado); }
        if (prioridad)    { query += " AND t.priority = ?";     params.push(prioridad); }
        if (usuario)      { query += " AND tu.id_user = ?";     params.push(usuario); }
        if (fecha_inicio) { query += " AND t.created_at >= ?";  params.push(fecha_inicio); }
        if (fecha_fin)    { query += " AND t.created_at <= ?";  params.push(fecha_fin); }
        const [rows] = await pool.query(query, params);
        return rows;
    }
};
