import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      {todos
        ? todos.map((todo) => (
            <div className='todoslist'>
              <div key={todo.id}>
                <p className={`${todo.completed ? 'completed' : ''}`}>
                  {todo.title}
                </p>
                <p>{todo.days}</p>
              </div>
            </div>
          ))
        : 'No todos'}
    </div>
  );
}

export default TodoList;
