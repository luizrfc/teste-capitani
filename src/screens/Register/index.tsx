import React from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Button, Container, Input, Text} from '@src/components';
import useRegisterHook from './register.hook';

function Register() {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const {control, handleSubmit, onSubmit, isValid} = useRegisterHook();

  return (
    <Container>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'column', gap: 24, paddingTop: 20}}>
          <View>
            <Text fontSize={20} fontWeight="bold" color="#000">
              {t('register.title')}
            </Text>
          </View>
          <View style={{flexDirection: 'column', gap: 24, paddingTop: 20}}>
            <View>
              <Input
                name="name"
                control={control}
                placeholder={t('register.form.name-placeholder')}
                label={t('register.form.name')}
              />
            </View>
            <View>
              <Input
                name="email"
                control={control}
                placeholder={t('register.form.email-placeholder')}
                label={t('register.form.email')}
              />
            </View>
            <View>
              <Input
                name="password"
                control={control}
                placeholder={t('register.form.password-placeholder')}
                password={true}
                label={t('register.form.password')}
              />
            </View>
            <Button
              title={t('register.form.btn-register')}
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid}
            />
            <Button
              bgColor="transparent"
              title={t('register.form.btn-login')}
              // @ts-ignore
              onPress={() => navigation.navigate('Auth')}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Register;
