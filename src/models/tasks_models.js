export const create = async (id, titulo,usuarios, descripcion, estado, prioridad, fecha_registro) => {
    return {
        status : 201,
        message: `Tarea creada correctamente con los datos: 
        id: ${id}
        titulo: ${titulo}
        usuarios: ${usuarios}
        descripcion: ${descripcion}
        estado: ${estado}
        prioridad: ${prioridad}
        fecha_registro: ${fecha_registro}`
    }
}
export const getAll = async () =>{
    return{
        status : 200,
        message : "Tareas obtenidas con exito"
    }
}
export const getById = async (id) =>{
    return{
        status : 200,
        message : `Tarea con id ${id} obtenida correctamente`
    }
}

export const update = async (id, titulo,usuarios, descripcion, estado, prioridad, fecha_registro) => {
    return{
        status: 200,
        message : `Tarea con id ${id} actualizada con los siguientes datos:
        titulo: ${titulo}
        usuarios: ${usuarios}
        descripcion: ${descripcion}
        estado: ${estado}
        prioridad: ${prioridad}
        fecha_registro: ${fecha_registro}`
    }
} 
export const destroy = async (id) => {
    return{
        status: 200,
        message : `Tarea con id ${id} Eliminada`
    }
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