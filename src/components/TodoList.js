import React from "react";
import Swal from 'sweetalert2'
function TodoList({ singleTask, completeTask, deleteTodo, editTodo }) {
  const confirmDeletion = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      background: '#8758FF',
      color: '#FFFFFF',
      confirmButtonColor: '#2B1F22',
      cancelButtonColor: '#2B1F22',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your task has been deleted.',
          icon: 'success',
          background: '#8758FF',
          color: '#FFFFFF',
          confirmButtonColor: '#2B1F22'
        })
        deleteTodo(id);
      }
    });
  }
  return (
    <div className={`Todo ${singleTask.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={singleTask.completed} onClick={() => completeTask(singleTask.id)} />
      <p>{singleTask.task}</p>
      <div>
        {!singleTask.completed && 
        <i className="fa fa-pencil edit-icon" onClick={() => editTodo(singleTask.id)} ></i>}
        
        <i className="fa fa-trash delete-icon" onClick={() => confirmDeletion(singleTask.id)}></i>
      </div>
    </div>
  );
}

export default TodoList;