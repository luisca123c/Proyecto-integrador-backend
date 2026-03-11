export const create = async (id, titulo, descripcion, estado) => {
    return {
        status : 201,
        messate: `Tarea creada correctamente con los datos: 
        id: ${id}
        titulo: ${titulo}
        descripcion: ${descripcion}
        estado: ${estado}`
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

export const update = async (id, titulo, descripcion, estado) => {
    return{
        status: 200,
        message : `Tarea con id ${id} actualizada con los siguientes datos:
        titulo: ${titulo}
        descripcion: ${descripcion}
        estado: ${estado}`
    }
} 
export const destroy = async (id) => {
    return{
        
    }
} 
export const updateStatus = async (id, estado) => {
    return{
        status : 200,
        message : `Estado de tarea con id ${id} actualizado a ${estado}`
    }
}