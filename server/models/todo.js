let mongoose = require('mongoose')

let todoSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('ToDo', todoSchema)