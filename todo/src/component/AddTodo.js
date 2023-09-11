import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input,setInput]=useState('');
    const dispach=useDispatch();
    const todoHandler=(e)=>{
        e.preventDefault();
        dispach(addTodo(input))
        setInput('')
    }
  return (
    <div>
      <form onSubmit={todoHandler}>
        <input type='text' placeholder='Enter todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
        
        <input type='submit'/>
      </form>
    </div>
  )
}

export default AddTodo
