import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Container, Text} from '@src/components';
import {useAuth} from '@src/context/auth.context';

function Home() {
  const {t} = useTranslation();
  const {signOut} = useAuth();

  return (
    <Container>
      <Text fontSize={20} fontWeight="bold" color="#000">
        {t('home.title')}
      </Text>

      <Button title={t('home.btn-logout')} onPress={signOut} />
    </Container>
  );
}

export default Home;
