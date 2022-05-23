import React from 'react'

function Message({todos}) {
    const TaskLeft = todos.length - todos.filter( todo =>  todo.completed !== false).length

  return (
    <div className='message'>
        <h5> 
        { TaskLeft === 0 ?
        "Grat! 👍 You don´t have Tasks" 
        : `${TaskLeft} Task to complete`}
        </h5>
      </div>
  )
}

export default Message