import {TodoDTO} from '@src/shared';
import React from 'react';
import Todo from './ToDo';
import {Icon, Text} from '@src/components';
import {colors} from '@src/styles/theme';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SubTaskDTO} from '@src/shared/interfaces/todo.dto';

interface TodoProps {
  data: TodoDTO[] | SubTaskDTO[];
  subtask?: boolean;
  deleteSubTask?: (id: string) => void;
}

function TodoList({data, subtask = false, deleteSubTask}: TodoProps) {
  const {t} = useTranslation();

  if (data.length === 0) {
    return (
      <View style={{gap: 12, marginTop: 18}}>
        <Text fontSize={16} fontWeight="bold" color={colors.greyDark}>
          {subtask ? t('details.subtasks-none') : t('home.noTodos')}
        </Text>
        {!subtask && (
          <Text fontSize={14} color={colors.greyDark}>
            {t('home.noTodosDescription')}{' '}
            <Icon name="plus" size={12} color={colors.greyDark} />{' '}
            {t('home.noTodosDescription2')}
          </Text>
        )}
      </View>
    );
  }
  return data.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      subtask={subtask}
      deleteSubTask={deleteSubTask}
    />
  ));
}

export default TodoList;
