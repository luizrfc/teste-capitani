import {CheckBox, Icon, Text} from '@src/components';
import {TodoDTO} from '@src/shared';
import React from 'react';
import useToDoHook from './useTodo';
import {colors} from '@src/styles/theme';
import {TouchableOpacity, View} from 'react-native';
import {navigateTo} from '@src/hooks/useLinks';
import {useTodo} from '@src/context/todo.context';
import {useTranslation} from 'react-i18next';

interface TodoProps {
  todo: TodoDTO;
  subtask?: boolean;
  deleteSubTask?: (id: string) => void;
}

function Todo({todo, subtask = false, deleteSubTask}: TodoProps) {
  const {t} = useTranslation();
  const {control} = useToDoHook();

  const {updateTodo} = useTodo();

  const treatSubTasksCount = () => {
    if (!todo?.subTasks?.length) return;
    let countFormatted = todo?.subTasks?.length.toString();
    if (todo?.subTasks?.length < 10) {
      countFormatted = `0${countFormatted}`;
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}>
        <Text fontSize={12} color={colors.greyDark} fontWeight="bold">
          {countFormatted}
        </Text>
        <Text fontSize={12} color={colors.greyDark}>
          {t('details.subtasks')}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colors.greyLight,
          paddingVertical: 16,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <CheckBox
            control={control}
            name="completed"
            defaultChecked={todo.completed}
            changeChecked={() =>
              updateTodo({...todo, completed: !todo.completed})
            }
          />
          <TouchableOpacity
            activeOpacity={subtask ? 1 : 0.6}
            style={{
              flex: 1,
              gap: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 32,
            }}
            onPress={() =>
              subtask ? null : navigateTo('ToDo', {id: todo.id})
            }>
            <View style={{paddingRight: 16, width: '95%', gap: 4}}>
              <Text fontSize={16} fontWeight="bold" color={colors.greyDark}>
                {todo.title}
              </Text>
              {todo.description && (
                <Text fontSize={12} color={colors.greyDark} numberOfLines={2}>
                  {todo.description}
                </Text>
              )}
              {treatSubTasksCount()}
            </View>
            {!subtask ? (
              <View style={{width: '5%'}}>
                <Icon
                  name="chevron-right2"
                  color={colors.greyLight}
                  size={16}
                />
              </View>
            ) : (
              <View style={{width: '5%', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => deleteSubTask?.(todo.id as string)}>
                  <Icon name="trash" color={colors.danger} size={24} />
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Todo;
