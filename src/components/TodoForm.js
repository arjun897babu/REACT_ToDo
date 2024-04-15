import React, { useState } from 'react';

function TodoForm({addTodo}) {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(task);
    setTask('');
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
      <input type='text' className="todo-input" placeholder='What is the task today?' value={task} onChange={(event) => setTask(event.target.value)} />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
};
 
export default TodoForm