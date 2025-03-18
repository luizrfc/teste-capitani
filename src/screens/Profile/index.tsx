import {Button, Container, Text} from '@src/components';
import {useAuth} from '@src/context/auth.context';
import { useConfig } from '@src/context/config.context';
import {useTodo} from '@src/context/todo.context';
import {navigateTo} from '@src/hooks/useLinks';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

function Profile() {
  const {t} = useTranslation();
  const {signOut, removeAccount, user} = useAuth();
  const {handleLoading} = useConfig();
  const {clearAllTodos} = useTodo();

  const handleRemoveAccount = async () => {
    handleLoading(true);
    setTimeout(async () => {
      await removeAccount();
      await clearAllTodos();
      handleLoading(false);
      navigateTo('Auth');
    }, 1000);
  };

  const handleRemoveTodos = async () => {
    handleLoading(true);
    setTimeout(async () => {
      await clearAllTodos();
      handleLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <View style={{flex: 1, flexDirection: 'column', gap: 16}}>
        <Text fontSize={32} fontWeight="bold" color="#000">
          {t('profile.title')}
        </Text>
        <View style={{flexDirection: 'row', gap: 16}}>
          <Text fontSize={16} fontWeight="bold" color="#000">
            {t('profile.name')}:
          </Text>
          <Text fontSize={16} color="#000">
            {user?.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 16}}>
          <Text fontSize={16} fontWeight="bold" color="#000">
            {t('profile.email')}:
          </Text>
          <Text fontSize={16} color="#000">
            {user?.email}
          </Text>
        </View>
        <View style={{flexDirection: 'column', gap: 16}}>
          <Text fontSize={16} fontWeight="bold" color="#000">
            {t('profile.code')}:
          </Text>
          <Text fontSize={16} color="#000">
            {user?.code}
          </Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'column', gap: 16, marginTop: 48}}>
        <Button title={t('profile.btn-logout')} onPress={signOut} />
        <Button
          variant="secondary"
          title={t('profile.btn-remove-account')}
          onPress={handleRemoveAccount}
        />
        <Button
          variant="secondary"
          title={t('profile.btn-remove-todos')}
          onPress={handleRemoveTodos}
        />
        <Button
          variant="transparent"
          title={t('profile.btn-cancel')}
          onPress={() => navigateTo('Home')}
        />
      </View>
    </Container>
  );
}

export default Profile;
