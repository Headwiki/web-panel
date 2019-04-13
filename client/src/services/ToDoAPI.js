import API from '@/services/API'

export default {
  getToDos () {
    return API().get('todo')
  },
  addTodo (todo) {
    return API().post('todo', {
      todo: todo
    })
  },
  deleteTodo (todoID) {
    return API().post('todo/delete', {
      todoID: todoID
    })
  }
}
