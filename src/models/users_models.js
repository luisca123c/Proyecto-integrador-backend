export const create = async (id, nombre, correo, estado) => {
    return {
        status : 201,
        message : `Usuario creado correctamente con los datos: 
        id: ${id}
        nombre: ${nombre} 
        correo: ${correo}
        estado: ${estado}`
        
    }
}
export const getAll = async () =>{
    return{
        status : 200,
        message : "Usuarios obtenidos con exito"
    }
}
export const getById = async (id) =>{
    return{
        status : 200,
        message : `Usuario con id ${id} obtenido correctamente`
    }
}

export const update = async (id, nombre, correo, estado) => {
    return{
        status: 200,
        message : `Usuario con id ${id} actualizado con los siguientes datos: 
        nombre: ${nombre}
        correo: ${correo}
        estado: ${estado}`
    }
} 
export const destroy = async (id) => {
    return{
        status : 200,
        message : `Usuario con id ${id} Eliminado`
    }
} 
export const updateStatus = async (id, estado) => {
    return{
        status : 200,
        message : `Estado de usuario con id ${id} actualizado a ${estado}`
    }
}