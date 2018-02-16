const model = require('./model')

function getWWcars (req, res) {
  const data = model.find()

  res.json({
    data
  })
}

module.exports = {
  getWWcars
}
