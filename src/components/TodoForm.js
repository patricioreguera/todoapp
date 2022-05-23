import React,{useState,useEffect} from 'react'




function TodoForm({AddTodo,editTodo,UpdateTodo,CompletedTodo}) {
    const [formValue, setFormValue] = useState("");


    const trimValue = formValue.trim();


    useEffect (()=>{
        if(editTodo){
            setFormValue(editTodo.title)
        }
    },[editTodo])


    const handleInput = (e)=> {
        setFormValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (trimValue.length === 0){
            alert("Please Enter a Taks")
            setFormValue("")
        }else{

            if (editTodo){
                UpdateTodo(editTodo.id,trimValue)
                if(editTodo.completed){
                    CompletedTodo(editTodo.id)
                }
                setFormValue("")
            }
            else {
                AddTodo(trimValue)
                setFormValue("")
            }
        }


    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Add new Task here' onChange={handleInput} value={formValue}/>
        <button className={ editTodo ?"btnAddEdit" : 'btnAdd' }>{ editTodo ? "UPLOAD" : "ADD TASK"  }</button>
    </form>
  )
}

export default TodoForm