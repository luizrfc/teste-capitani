import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useConfig} from '@src/context/config.context';

import {TodoDTO} from '@src/shared';
import {useTodo} from '@src/context/todo.context';

interface IHomeHook {
  todos: TodoDTO[];
}

const useHomeHook = (): IHomeHook => {
  const isFocused = useIsFocused();
  const {handleLoading} = useConfig();
  const {todos, loadTodos} = useTodo();
  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        handleLoading(true);
        setTimeout(() => {
          loadTodos();
          handleLoading(false);
        }, 1000);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]),
  );

  return {todos};
};

export default useHomeHook;
