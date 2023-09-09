import React,{useState} from 'react';

export const EditTodoForm = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task);
    
    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value,task.id);
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className='todo-input' placeholder='Update Task' />
        <button type='submit' className='todo-btn update-btn'>Edit</button>  
    </form>
  )
}