const { Router } = require('express')
const foodRouter = Router()

const controller = require('./controller')

foodRouter.get('/fruits', controller.getFruits)

module.exports = foodRouter
