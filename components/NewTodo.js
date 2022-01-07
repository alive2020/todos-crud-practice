import axios from 'axios';
import React, { useEffect, useState } from 'react';

function NewTodo({ setIsModalOpen, setTodos, handleSave, todo }) {
  const [todoState, setTodoState] = useState({
    title: '',
    days: 1,
    completed: false,
    // id: '',
  });

  useEffect(() => {
    if (todo) {
      setTodoState(todo);
    } else {
      setTodoState({
        title: '',
        days: 1,
        completed: false,
        // id: '',
      });
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const response = await axios.post(
    //   'https://jsonplaceholder.typicode.com/todos',
    //   todoState
    // );
    // setTodos(response.data);

    // todoState['id'] = new Date().getTime();
    // console.log('temp', todoState);
    // setTodos(todoState);
    axios
      .post('https://jsonplaceholder.typicode.com/todos', todoState)
      .then((res) => {
        setTodos(res.data);
        setTodoState({
          title: '',
          days: 1,
          completed: false,
        });
        setIsModalOpen(false);
      });
    // fetch('https://jsonplaceholder.typicode.com/todos', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     todoState,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => setTodos(json.todoState));

    // setTodos(json.todoState);
    // console.log('todo', response.data);
  };

  return (
    <div className='todosDialog'>
      <form
        className='todosForm'
        onSubmit={(e) => (todo ? handleSave(todoState) : handleSubmit(e))}
      >
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
        <div>
          <label htmlFor='days'>Days</label>
          <input
            type='number'
            name='days'
            value={todoState.days}
            onChange={(e) =>
              setTodoState({ ...todoState, days: e.target.value })
            }
          />
        </div>
        <div>
          <button type='button' onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>

          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;
