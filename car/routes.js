const { Router } = require('express')
const foodRouter = Router()

const controller = require('./controller')

foodRouter.get('/ww', controller.getWWcars)

module.exports = foodRouter
