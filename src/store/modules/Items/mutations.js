export default {
  createToDo(state, payload) {
    state.items.push(payload)
  },
  deleteItem(state, itemId) {
    state.items = state.items.filter((item) => item.id !== itemId)
  },
  completeItem(state, itemId) {
    const item = state.items.find((item) => item.id === itemId)
    if (item) {
      item.completed = true
    }
  },
  setTodos(state, todos) {
    console.log(todos)
    state.items = todos
  }
}
