import create from 'zustand';

export const useStore = create(set => ({
  toDos: [],
  addTodo: newItem => set(state => ({ toDos: [...state.toDos, newItem] })),
  removeToDo: itemId =>
    set(state => {
      const newItems = state.toDos.filter(item => item.id !== itemId);
      return { toDos: newItems };
    }),
  updateToDo: updatedItem =>
    set(state => {
      const newItems = state.toDos.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      return { toDos: newItems };
    }),
  toggleTodo: item =>
    set(state => {
      const newTodos = state.toDos.map(task => {
        return task.id === item.id
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
      return { toDos: newTodos };
    })
}));
