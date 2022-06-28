import React, { useState } from 'react';
import Todo from './Todo';
import { useStore } from './store';

const getFilteredTodoList = (todos, filter) => {
  return todos.filter(todo => {
    if (filter === 'Completed') {
      return todo.complete;
    } else if (filter === 'Active') {
      return !todo.complete;
    } else {
      return todo;
    }
  });
};

const TodoList = ({ filter, setFilter }) => {
  const toDos = useStore(state => state.toDos);
  const updateToDo = useStore(state => state.updateToDo);

  const [editItem, openEditMode] = useState({ edit: false, item: {} });

  const handleChange = e => {
    openEditMode({
      ...editItem,
      item: { ...editItem.item, task: e.currentTarget.value }
    });
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    updateToDo(editItem.item);
    openEditMode({ edit: false, item: {} });
  };

  return (
    <>
      <ul>
        {getFilteredTodoList(toDos, filter).map(todo => {
          return <Todo openEditMode={openEditMode} key={todo.id} todo={todo} />;
        })}
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('All')}>All</button>
      </ul>
      {editItem.edit && (
        <form onSubmit={handleEditSubmit}>
          <input
            value={editItem.item?.task}
            type='text'
            onChange={handleChange}
          />
          <button>Edit Todo</button>
        </form>
      )}
    </>
  );
};

export default TodoList;
