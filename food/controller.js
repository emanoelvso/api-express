const model = require('./model')

function getFruits (req, res) {
  const data = model.find()

  res.json({
    data
  })
}

module.exports = {
  getFruits
}
