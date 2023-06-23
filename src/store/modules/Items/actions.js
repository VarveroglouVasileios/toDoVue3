export default {
  async createToDo(context, payload) {
    const itemId = new Date().getTime()
    const data = {
      id: itemId,
      title: payload.title,
      createdAt: payload.date,
      completed: payload.completed
    }

    const sendData = await fetch(
      `https://todo-82e70-default-rtdb.firebaseio.com/todos/${itemId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(data)
      }
    )

    if (!sendData.ok) {
      console.error('Failed to post data')
      return false
    }

    context.commit('createToDo', data)
  },
  async loadData(context) {
    try {
      console.log('loading...')
      const response = await fetch(`https://todo-82e70-default-rtdb.firebaseio.com/todos.json`)
      const data = await response.json()

      if (!response.ok) {
        console.log('Failed to get data', data)
        return
      }

      const todos = []
      for (const key in data) {
        const todo = {
          id: key,
          title: data[key].title,
          completed: data[key].completed,
          createdAt: data[key].createdAt
        }
        todos.push(todo)
      }
      context.commit('setTodos', todos)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  },
  async deleteItem(context, itemId) {
    const response = await fetch(
      `https://todo-82e70-default-rtdb.firebaseio.com/todos/${itemId}.json`,
      {
        method: 'DELETE'
      }
    )

    // Error handling
    if (!response.ok) {
      const responseData = await response.json()
      const error = new Error(responseData.message || 'Failed to delete item')
      throw error
    }

    // If successful, commit mutation to remove item from state
    context.commit('deleteItem', itemId)
  }
}
