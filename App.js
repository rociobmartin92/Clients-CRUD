import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackRoot from './src/stack';
import LoadingProvider from './src/context/LoadingProvider';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c89ce7',
    secondary: '#bbe79c',
  },
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <LoadingProvider>
          <StackRoot />
        </LoadingProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
