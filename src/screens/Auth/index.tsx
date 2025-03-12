import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Text} from '@src/components';

function Auth() {
  const {t} = useTranslation();

  return (
    <Container>
      <Text fontSize={20} fontWeight="bold" color="#000">
        {t('auth.title')}
      </Text>
    </Container>
  );
}

export default Auth;
