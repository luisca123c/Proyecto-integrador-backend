import pool from '../config/db.js';

export const userModel = {
    create: async (newUser) => {
        const { nombre_completo, correo } = newUser;
        const [result] = await pool.query(
            "INSERT INTO users (full_name, email, active) VALUES (?, ?, true)",
            [nombre_completo, correo]
        );
        const [rows] = await pool.query(
            "SELECT id, full_name AS nombre_completo, email AS correo, active AS activo FROM users WHERE id = ?",
            [result.insertId]
        );
        return rows[0];
    },
    getAll: async () => {
        const [rows] = await pool.query(
            "SELECT id, full_name AS nombre_completo, email AS correo, active AS activo FROM users"
        );
        return rows;
    },
    getById: async (id) => {
        const [rows] = await pool.query(
            "SELECT id, full_name AS nombre_completo, email AS correo, active AS activo FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    },
    update: async (id, updatedUser) => {
        const { nombre_completo, correo } = updatedUser;
        const [result] = await pool.query(
            "UPDATE users SET full_name = ?, email = ? WHERE id = ?",
            [nombre_completo, correo, id]
        );
        if (result.affectedRows === 0) return null;
        const [rows] = await pool.query(
            "SELECT id, full_name AS nombre_completo, email AS correo, active AS activo FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    },
    destroy: async (id) => {
        const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
        return result.affectedRows > 0;
    },
    updateStatus: async (id, activo) => {
        const [result] = await pool.query(
            "UPDATE users SET active = ? WHERE id = ?",
            [activo, id]
        );
        return result.affectedRows > 0;
    },
    getAllTasksByUser: async (userid) => {
        const [rows] = await pool.query(
            `SELECT t.id, t.title AS titulo, t.description AS descripcion,
                    t.status AS estado, t.priority AS prioridad,
                    t.created_at, t.updated_at
             FROM tasks t
             JOIN tasks_users tu ON t.id = tu.id_task
             WHERE tu.id_user = ?`,
            [userid]
        );
        return rows;
    }
};
