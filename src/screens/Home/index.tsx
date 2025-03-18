import { Button, ButtonAdd, Container, Text } from '@src/components';
import TodoList from '@src/containers/ToDo';
import NewToDo from '@src/containers/ToDo/NewToDo';
import { useConfig } from '@src/context/config.context';
import { useTodo } from '@src/context/todo.context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import useHomeHook from './home.hook';

function Home() {
  const {t} = useTranslation();
  const {todos} = useHomeHook();
  const {handleModal} = useConfig();
  const {clearCompletedTodos} = useTodo();
  const {handleLoading} = useConfig();

  const handleClearCompleted = () => {
    handleLoading(true);
    setTimeout(async () => {
      await clearCompletedTodos();
      handleLoading(false);
    }, 1000);
  };

  return (
    <>
      <Container scrollEnabled={true}>
        <View style={{width: '100%'}}>
          <Text fontSize={32} fontWeight="bold" style={{marginBottom: 10}}>
            {t('home.title')}
          </Text>
        </View>

        <View style={{flexWrap: 'wrap', marginBottom: 16}}>
          <TodoList data={todos} />
        </View>

        <Button
          title={t('home.btn-clear')}
          variant="transparent"
          onPress={handleClearCompleted}
        />
      </Container>
      <NewToDo />
      <ButtonAdd onPress={() => handleModal(true)} />
    </>
  );
}

export default Home;
