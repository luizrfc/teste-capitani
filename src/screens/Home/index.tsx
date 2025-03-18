import {ButtonAdd, Container, Text} from '@src/components';
import React from 'react';
import {useTranslation} from 'react-i18next';
import useHomeHook from './home.hook';
import {View} from 'react-native';
import TodoList from '@src/containers/ToDo';
import {useConfig} from '@src/context/config.context';
import NewToDo from '@src/containers/ToDo/NewToDo';

function Home() {
  const {t} = useTranslation();
  const {todos} = useHomeHook();
  const {handleModal} = useConfig();

  return (
    <>
      <Container scrollEnabled={true}>
        <View style={{width: '100%'}}>
          <Text fontSize={32} fontWeight="bold" style={{marginBottom: 10}}>
            {t('home.title')}
          </Text>
        </View>

        <View style={{flexWrap: 'wrap'}}>
          <TodoList data={todos} />
        </View>
      </Container>
      <NewToDo />
      <ButtonAdd onPress={() => handleModal(true)} />
    </>
  );
}

export default Home;
