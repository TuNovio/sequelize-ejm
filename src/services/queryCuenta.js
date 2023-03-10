const myModel = require('../models/myModel')

async function testCuenta(){
    try{
        await myModel.Cuenta.sync({ alter:true })
        console.log('inicialización tabla cuenta')
    }catch (err){
        console.error(`error: ${err.message}`)
    }
}
async function getCuentas(){
    const cuentas = await myModel.Cuenta.findAll({ include: myModel.User })
    return cuentas
}

async function createCuenta(nData){
    const nCuenta = await myModel.Cuenta.create({
        cuenta: nData.cuenta,
        email: nData.email,
        password: nData.password,
        UserId: nData.UserID
    })
    return nCuenta
}

async function deleteCuenta(nData){
    const eliminado = await myModel.Cuenta.destroy({
        id: nData.id
    })
    return eliminado
}

async function getRelation(){
    const relation = await myModel.Cuenta.create({
        cuenta: 'test1',
        email: 'test@test1',
        password: '12test1',
        UserId: 2
    })
    console.log((await relation.getUser()).Nombre)
    return relation
}
module.exports = {
    testCuenta,
    createCuenta,
    getRelation,
    getCuentas,
    deleteCuenta
}