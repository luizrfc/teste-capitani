import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import theme from '@src/styles/theme';
import {ScrollView, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@src/utils/i18n';
import Header from '@src/containers/header';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Header />
        <ScrollView>
          <Text>Hello World</Text>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
