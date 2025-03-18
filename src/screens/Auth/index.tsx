import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button, Container, Input, Text} from '@src/components';
import useAuthHook from './auth.hook';
import {navigateTo} from '@src/hooks/useLinks';

function Auth() {
  const {t} = useTranslation();

  const {control, handleSubmit, onSubmit, isValid} = useAuthHook();

  return (
    <Container>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'column', gap: 24, paddingTop: 20}}>
          <View>
            <Text fontSize={20} fontWeight="bold" color="#000">
              {t('auth.title')}
            </Text>
          </View>
          <View style={{flexDirection: 'column', gap: 24, paddingTop: 20}}>
            <View>
              <Input
                name="email"
                control={control}
                placeholder={t('auth.form.email-placeholder')}
                label={t('auth.form.email')}
              />
            </View>
            <View>
              <Input
                name="password"
                control={control}
                placeholder={t('auth.form.password-placeholder')}
                password={true}
                label={t('auth.form.password')}
              />
            </View>
            <Button
              title={t('auth.form.btn-login')}
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid}
            />
            <Button
              bgColor="transparent"
              title={t('auth.form.btn-register')}
              // @ts-ignore
              onPress={() => navigateTo('Register')}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Auth;
