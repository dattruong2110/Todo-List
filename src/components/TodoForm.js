import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <React.Fragment>
                    <input
                        type='text' 
                        placeholder='Update your todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-btn edit'>Update</button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <input
                            type='text' 
                            placeholder='Add a todo'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-btn'>Add Todo</button>
                    </React.Fragment>
                )}
            </form>
        </div>
    )
}

export default TodoForm