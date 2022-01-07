import React, { useState } from 'react'



function NewTodo({setIsModalOpen}) {
    const [todoState, setTodoState] = useState({
        todo: "",
        days: 1
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('todo', todoState)

    }

    return (
        <div className='todos'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">Todo</label>
                <input type="text" name="todo" value={todoState.todo} onChange={(e) => handleChange(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="days">Days</label>
                <input type="number" name="days" value={todoState.days} onChange={(e) => handleChange(e.target.value)}/>
            </div>
            <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}

export default NewTodo
