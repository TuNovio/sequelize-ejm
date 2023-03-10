const myModel = require('../models/myModel')


async function testUser() {
    try {
        await myModel.User.sync({ alter: true })
        console.log("Inicialización tabla user")
    } catch (err) {
        console.error(`error: ${err.message}`)
    }
}

async function getAll(){
    const usuarios = await myModel.User.findAll();
    return usuarios
}

async function searchName(nNombre){
    const buscado = await myModel.User.findAll({
        where: {
            Nombre: nNombre
        }
    })
    return buscado
}

async function createUser(nData){
    const usuario = await myModel.User.create({
        Nombre: nData.nombre,
        Apellido: nData.apellido,
        Edad: nData.edad
    })
    return true
}

async function updateUser(nData){
    const modificado = await myModel.User.update({
        Nombre: nData.nombre,
        Apellido: nData.apellido, 
        Edad: nData.edad
    },{
        where: {
            id: nData.id
        }
    })
    return true
}

async function deleteUser(nData){
    const eliminado = await myModel.User.destroy({
        where: {
            id: nData.id
        }
    })
    return true
}

testUser()

module.exports ={
    getAll,
    createUser,
    updateUser,
    deleteUser
}