import {
  Button,
  ButtonAdd,
  CheckBox,
  Container,
  Input,
  Text,
} from '@src/components';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {colors} from '@src/styles/theme';
import {useTodo} from '@src/context/todo.context';
import TodoList from '@src/containers/ToDo';
import NewToDo from '@src/containers/ToDo/NewToDo';
import {useConfig} from '@src/context/config.context';
import {navigateTo} from '@src/hooks/useLinks';
import {SubTaskDTO, TodoDTO} from '@src/shared/interfaces/todo.dto';
import useToDoHook from '@src/containers/ToDo/useTodo';

function ToDo() {
  const {t} = useTranslation();
  const route = useRoute();
  const {control, isValid, handleSubmit, onUpdate, setValue} = useToDoHook();
  const {id} = route.params as {id: string};

  const {getTodo, deleteTodo, addSubTask, deleteSubTask} = useTodo();

  const [todo, setTodo] = useState<TodoDTO>();

  const loadData = () => {
    const result = getTodo(id);
    setValue('id', result?.id || '');
    setValue('title', result?.title || '');
    setValue('description', result?.description || '', {
      shouldValidate: true,
    });
    setTodo(result);
  };

  const {handleModal, handleLoading} = useConfig();

  const handleDeleteTodo = async () => {
    handleLoading(true);
    setTimeout(async () => {
      await deleteTodo(id);
      handleLoading(false);
      navigateTo('Home');
    }, 1000);
  };

  const handleAddSubTask = async (data: TodoDTO | SubTaskDTO) => {
    handleLoading(true);
    setTimeout(async () => {
      await addSubTask(data as SubTaskDTO, id);
      handleModal(false);
      handleLoading(false);
    }, 1000);
  };

  const handleDeleteSubTask = async (subTaskId: string) => {
    console.log('🚀 ~ handleDeleteSubTask ~ subTaskId:', subTaskId);
    handleLoading(true);
    setTimeout(async () => {
      await deleteSubTask(subTaskId, id);
      handleLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        scrollable={true}
        scrollEnabled={true}
        style={{
          paddingBottom: 96,
        }}>
        <Text fontSize={24} fontWeight="bold">
          {t('details.title')}
        </Text>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            paddingVertical: 32,
            borderBottomWidth: 1,
            borderColor: colors.separator,
            gap: 16,
          }}>
          <View style={{gap: 16}}>
            <Input
              control={control}
              value={todo?.title}
              name="title"
              placeholder={t('todo.form.title-placeholder')}
              label={t('todo.form.title')}
            />
            <Input
              control={control}
              value={todo?.description}
              name="description"
              placeholder={t('todo.form.description-placeholder')}
              label={t('todo.form.description')}
              multiline
              numberOfLines={4}
            />
            <CheckBox
              control={control}
              name="completed"
              label={t('details.completed')}
              defaultChecked={todo?.completed}
            />
            <Button
              title={t('details.btn-edit')}
              variant="primary"
              onPress={handleSubmit(onUpdate)}
              disabled={!isValid}
            />
            <Button
              title={t('details.btn-remove')}
              variant="danger"
              onPress={handleDeleteTodo}
            />
          </View>
        </View>
        <View style={{flex: 1, marginVertical: 32}}>
          <Text fontSize={16} color={colors.greyDark} fontWeight="bold">
            {t('details.subtasks')}
          </Text>
          <TodoList
            data={todo?.subTasks || []}
            subtask={true}
            deleteSubTask={handleDeleteSubTask}
          />
        </View>
        <View
          style={{
            flex: 1,
            gap: 8,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <Button
            title={t('details.btn-back')}
            variant="transparent"
            onPress={() => navigateTo('Home')}
          />
        </View>
        <View style={{height: 128}} />
      </Container>
      <NewToDo onPress={handleAddSubTask} subtask={true} />
      <ButtonAdd onPress={() => handleModal(true)} />
    </>
  );
}

export default ToDo;
