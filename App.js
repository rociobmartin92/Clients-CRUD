import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoot from './src/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ac7670',
  },
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoot />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
