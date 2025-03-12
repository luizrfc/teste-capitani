import React, {JSX, useEffect} from 'react';
import {ThemeProvider} from '@rneui/themed';
import theme from '@src/styles/theme';

import '@src/utils/i18n';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Routes from './screens/routes';
import useLanguage from './hooks/useLanguage';

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
          <Routes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
