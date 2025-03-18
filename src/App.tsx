import { ThemeProvider } from '@rneui/themed';
import theme from '@src/styles/theme';
import React, { JSX, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loading } from './components';
import { AuthProvider } from './context/auth.context';
import { ConfigProvider } from './context/config.context';
import useLanguage from './hooks/useLanguage';
import Routes from './screens/routes';

import '@src/utils/i18n';
import { TodoProvider } from './context/todo.context';

function App(): JSX.Element {
  const {getLanguage} = useLanguage();

  useEffect(() => {
    getLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView>
          <ConfigProvider>
            <AuthProvider>
              <TodoProvider>
                <Loading />
                <Routes />
              </TodoProvider>
            </AuthProvider>
          </ConfigProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
