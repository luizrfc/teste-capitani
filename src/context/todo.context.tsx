import {uuidv4} from '@src/utils/hash';
import {getStorage, removeStorage, setStorage} from '@src/utils/storage';
import React, {createContext, useContext, useState} from 'react';

import {SubTaskDTO, TodoDTO} from '../shared/interfaces/todo.dto';
import {useAuth} from './auth.context';

interface TodoContextData {
  todos: TodoDTO[];
  createTodo: (data: TodoDTO) => Promise<void>;
  addSubTask: (data: SubTaskDTO, id: string) => Promise<void>;
  updateSubTask: (data: SubTaskDTO, id: string) => Promise<void>;
  deleteSubTask: (id: string, todoId: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (data: TodoDTO) => Promise<void>;
  clearAllTodos: () => Promise<void>;
  loadTodos: () => Promise<void>;
  getTodo: (id: string) => TodoDTO | undefined;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const TodoProvider = ({children}: {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<TodoDTO[]>([]);

  const {user} = useAuth();

  const createTodo = async (data: TodoDTO) => {
    const newTodo = {
      ...data,
      subTasks: [],
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
      id: uuidv4(),
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

  const deleteSubTask = async (id: string, todoId: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          subTasks: todo.subTasks?.filter(subTask => subTask.id !== id) || [],
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

  const updateTodo = async (data: TodoDTO) => {
    console.log('🚀 ~ updateTodo ~ data:', data);
    const newTodos = todos.map(todo => {
      if (todo.id === data.id) {
        return {...todo, ...data, updatedAt: new Date()};
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const saveTodos = async (data: TodoDTO[]) => {
    await setStorage(`${user?.id}:todos`, JSON.stringify(data));
  };

  const clearAllTodos = async () => {
    setTodos([]);
    await removeStorage(`${user?.id}:todos`);
  };

  const loadTodos = async () => {
    const _todos = await getStorage(`${user?.id}:todos`);
    if (_todos) {
      setTodos(JSON.parse(_todos));
    }
  };

  const getTodo = (id: string) => {
    return todos.find(todo => todo.id === id);
  };

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
        loadTodos,
        getTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
