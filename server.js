const express = require('express')
const app = express()
const APP_PORT = 3004

const foodRoutes = require('./food/routes')
const carRoutes = require('./car/routes')

app.use('/food', foodRoutes)
app.use('/car', carRoutes)

app.listen(APP_PORT, error => {
  if (error) throw error
  console.log('rodando na ', APP_PORT)
})
