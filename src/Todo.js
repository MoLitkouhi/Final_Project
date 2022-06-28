import React from 'react';
import { useStore } from './store';

const Todo = ({ todo, openEditMode }) => {
  const toggleTodo = useStore(state => state.toggleTodo);
  const removeToDo = useStore(state => state.removeToDo);

  const handleClick = e => {
    e.preventDefault();
    toggleTodo(todo);
  };

  const deleteItem = e => {
    e.preventDefault();
    removeToDo(todo.id);
  };

  const handleUpdate = () => {
    openEditMode({ edit: true, item: todo });
  };

  return (
    <li id={todo.id} key={todo.id + todo.task} name='todo' value={todo.id}>
      <p
        onClick={handleClick}
        className={todo.complete ? 'todo strike' : 'todo'}
      >
        {todo.task}
      </p>
      <p onClick={deleteItem}>Delete Item</p>
      <p onClick={handleUpdate}>Edit Item</p>
    </li>
  );
};

export default Todo;
