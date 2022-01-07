import React from 'react';

function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <div>
      {todos
        ? todos.map((todo) => (
            <div key={todo.id} className='todoslist'>
              <div>
                <p className={`${todo.completed ? 'completed' : ''}`}>
                  {todo.title}
                </p>
                <p>{todo.days}</p>
              </div>

              <div>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </div>
            </div>
          ))
        : 'No todos'}
    </div>
  );
}

export default TodoList;
