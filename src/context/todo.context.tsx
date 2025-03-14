import {uuidv4} from '@src/utils/hash';
import {getStorage, removeStorage, setStorage} from '@src/utils/storage';
import React, {createContext, useContext, useEffect, useState} from 'react';

import {SubTaskDTO, TodoDTO} from '../shared/interfaces/todo.dto';
import {useAuth} from './auth.context';

interface TodoContextData {
  todos: TodoDTO[];
  createTodo: (data: TodoDTO) => Promise<void>;
  addSubTask: (data: SubTaskDTO, id: string) => Promise<void>;
  updateSubTask: (data: SubTaskDTO, id: string) => Promise<void>;
  deleteSubTask: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (data: TodoDTO, id: string) => Promise<void>;
  clearAllTodos: () => Promise<void>;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const TodoProvider = ({children}: {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<TodoDTO[]>([]);

  const {user} = useAuth();

  const createTodo = async (data: TodoDTO) => {
    const newTodo = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
    await saveTodos([...todos, newTodo]);
  };

  const addSubTask = async (data: SubTaskDTO, id: string) => {
    const newTodo = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, subTasks: [...(todo.subTasks || []), newTodo]};
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const updateSubTask = async (data: SubTaskDTO, id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, subTasks: [...(todo.subTasks || []), data]};
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const deleteSubTask = async (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          subTasks: todo.subTasks?.filter(subTask => subTask.id !== id),
        };
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const deleteTodo = async (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const updateTodo = async (data: TodoDTO, id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, ...data};
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const saveTodos = async (data: TodoDTO[]) => {
    await setStorage(`${user?.id}-todos`, JSON.stringify(data));
  };

  const clearAllTodos = async () => {
    setTodos([]);
    await removeStorage(`${user?.id}-todos`);
  };

  const loadTodos = async () => {
    const todos = await getStorage(`${user?.id}-todos`);
    if (todos) {
      setTodos(todos);
    }
  };

  useEffect(() => {
    loadTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        addSubTask,
        updateSubTask,
        deleteSubTask,
        deleteTodo,
        updateTodo,
        clearAllTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
