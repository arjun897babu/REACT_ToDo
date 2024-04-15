import React, { useState } from 'react';

function EditTodoForm({editTodo,task}) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
    
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
      <input type='text' className="todo-input" placeholder='Update task ?' value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit" className='todo-btn'>update Task</button>
    </form>
  )
};
 
export default EditTodoForm