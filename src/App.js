import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React,{useState} from 'react';
import Message from './components/Message';


const initialTodos = [ 
  {
    id:1,
    title: "Hi! Im a Task Demo, Click me to complete or click here 👇 to Delete/Edit ",
    completed: false
  }
];


function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [editTodo, setEditTodo]= useState(null);

  const AddTodo =(Todo)=>{
    const TodoToAdd = {
      id: Date.now(),
      title: Todo,
      completed: false
    }
    const newTodo = [TodoToAdd, ...todos]
    setTodos(newTodo)
  }

  const DeleteTodo =(id)=>{
    const newTodo = todos.filter( todo => todo.id !== id)

    setTodos(newTodo)
  }

  const UpdateTodo =(id, title) =>{
    const newTodo = todos.map( todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })
    setTodos(newTodo)
    setEditTodo(null)
  }


  const CompletedTodo =(id)=>{
    const newTodo = todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodo)
  }

  return (
    <header className='App'>
      <div className={editTodo ?"titleEditing":'title'}>
        <h4>
          {editTodo ? "Edit your Task" :"What´s the plan for Today?" }
        </h4>
        <TodoForm
        AddTodo={AddTodo}
        setTodos={setTodos}
        editTodo={editTodo}
        UpdateTodo={UpdateTodo}
        CompletedTodo={CompletedTodo}
        />
      </div>
      <Message todos={todos}/>
      <TodoList
      todos={todos}
      DeleteTodo={DeleteTodo}
      setEditTodo={setEditTodo}
      CompletedTodo={CompletedTodo}
      />
    </header>
  );
}

export default App;
