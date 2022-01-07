import axios from 'axios';
import React, { useState } from 'react';

function NewTodo({ setIsModalOpen, setTodos }) {
  const [todoState, setTodoState] = useState({
    title: '',
    // days: 1,
    completed: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // const response = await axios.post(
    //   'https://jsonplaceholder.typicode.com/todos',
    //   todoState
    // );
    // setTodos(response.data);

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        todoState,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos(json.todoState));

    setIsModalOpen(false);
    setTodos({
      title: '',
      completed: false,
    });
    //   setTodos(json.todoState)
    // console.log('todo', response.data);
  }

  return (
    <div className='todosDialog'>
      <form className='todosForm' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Todo</label>
          <input
            type='text'
            name='title'
            value={todoState.title}
            onChange={(e) =>
              setTodoState({ ...todoState, title: e.target.value })
            }
          />
        </div>
        {/* <div>
          <label htmlFor='days'>Days</label>
          <input
            type='number'
            name='days'
            value={todoState.days}
            onChange={(e) =>
              setTodoState({ ...todoState, days: e.target.value })
            }
          />
        </div> */}
        <div>
          <button type='buttton' onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>

          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;
