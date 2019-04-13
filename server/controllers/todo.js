const ToDo = require('./../models/todo')

module.exports = {
  getAll: (req, res, next) => {
    ToDo.find((err, todos) => {
      if (err)
        res.send(err)
      else if (!todos)
        res.send(404)
      else
        res.send(todos)
    })
  },
  add: (req, res, next) => {
    let todo = new ToDo({
      title: req.body.todo
    })
    todo.save()
      .then(doc => {
        console.log(doc)
        res.send(doc)
      })
      .catch(err => {
        console.error(err)
        res.send('')
      })
  },
  findOneAndDelete: (req, res, next) => {
    ToDo.findOneAndDelete({
      _id: req.body.todoID
    })
      .then(response => {
        console.log(response)
        res.send()
      })
      .catch(err => {
        console.error(err)
        res.send('')
      })
  }
}