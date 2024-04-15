import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import TodoList from './TodoList';
import EditTodoForm from './EditTodo';

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {

    const trimmedTask = todo.trim();
    if (!trimmedTask) {
      return;
    };
    const isDuplicate = todos.some((item) => item.task.toLowerCase() === trimmedTask.toLowerCase());

    if (isDuplicate) {
      return;
    }
    setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false }]);
  }

  const completeTask = (id) => {
    setTodos(todos.map((todo) => todo.id === id?{...todo,completed:!todo.completed}:todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing }
      } else {
        return todo
      }
    }))
  }

  const editTodoTask = (value, id) => {

    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: value, isEditing: !todo.isEditing }
      } else {
        return todo
      }
    }))

  };

  //created todo list 
  const todolist = todos.map((todo) => {
    if (todo.isEditing) {
      return <EditTodoForm editTodo={editTodoTask} task={todo} />
    } else {
      return <TodoList singleTask={todo} key={todo.id} completeTask={completeTask} deleteTodo={deleteTodo} editTodo={editTodo} />
    }
  })

  return (
    <div className='TodoWrapper'>
      <h1>Focus On Your Day</h1>
      <TodoForm addTodo={addTodo} />
      {todolist}
    </div>
  );
}
export default TodoWrapper