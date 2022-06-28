import React, { useState } from 'react';
import { useStore } from './store';

const TodoForm = () => {
  const addTodo = useStore(state => state.addTodo);

  const [userInput, setUserInput] = useState('');

  const handleChange = e => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const randId = Math.random().toString(36).slice(2);
    const newItem = { id: randId, task: userInput, complete: false };
    addTodo(newItem);
    setUserInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type='text' onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
