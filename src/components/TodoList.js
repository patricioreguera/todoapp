import React from 'react'
import Todo from './Todo'



function TodoList({todos,DeleteTodo,setEditTodo,CompletedTodo}) {
  return todos.map( todo => 
    <Todo
    key={todo.id}
    todo={todo}
    DeleteTodo={DeleteTodo}
    setEditTodo={setEditTodo}
    CompletedTodo={CompletedTodo}
    />
    )
}

export default TodoList