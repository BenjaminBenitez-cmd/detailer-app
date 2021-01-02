const crud = require('../../utils/crud')
const Washes = require('./washes-model')

module.exports = crud.crudControllers(Washes);