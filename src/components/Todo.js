import React from 'react'



function Todo({todo,DeleteTodo,setEditTodo,CompletedTodo}) {
  return (
    <>
        <div className={todo.completed ? 'TodoCompleted' : "Todo"}  onClick={()=>CompletedTodo(todo.id)}>
            <h3 >{todo.title}</h3>
        </div>
        <div className='Butons-to-edit'>
          <button
          className='BtnDelete'
          onClick={()=>DeleteTodo(todo.id)}
          >Delete</button>
            <button
            className='BtnEdit'
            onClick={()=>setEditTodo(todo)}
            >Edit</button>          
        </div>

    </>
  )
}

export default Todo


