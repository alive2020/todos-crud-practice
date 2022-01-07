import React from 'react';

function TodoList({ todos }) {
  return (
    <div className='todoslist'>
      {todos
        ? todos.map((todo) => (
            <div key={todo.id}>
              <p className={`${todo.completed ? 'completed' : ''}`}>
                {todo.title}
              </p>
              <p>{todo.days}</p>
            </div>
          ))
        : 'No todos'}
    </div>
  );
}

export default TodoList;
