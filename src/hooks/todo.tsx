import React, { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';

interface ItemTodo {
  id: string;
  title: string;
  description: string;
}

interface TodoContextData {
  todo: ItemTodo[];
  handleAddItem: (item: Omit<ItemTodo, 'id'>) => void;
  handleDeleteItem: (id: string) => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const TodoProvider: React.FC = ({ children }) => {
  const [todo, setTodo] = useState<ItemTodo[]>([]);
  const handleAddItem = useCallback(
    (item: Omit<ItemTodo, 'id'>) => {
      const customItem = { id: uuidv4(), ...item };
      setTodo([...todo, customItem]);
    },
    [todo],
  );

  const handleDeleteItem = useCallback(
    (id: string) => {
      const todoFiltered = todo.filter(item => {
        return item.id === id;
      });

      setTodo(todoFiltered);
    },
    [todo],
  );
  return (
    <TodoContext.Provider value={{ todo, handleAddItem, handleDeleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export function useTodo(): TodoContextData {
  const context = useContext(TodoContext);

  return context;
}
