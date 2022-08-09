import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import { theme } from '../../App';
import AddClients from '../views/AddClients';
import DetailsClients from '../views/DetailsClients';
import TopBar from '../components/TopBar';

const Stack = createNativeStackNavigator();

const StackRoot = () => {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.surface,
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={({ navigation, route }) => {
          return {
            title: '',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: (props) => {
              return (
                <TopBar
                  {...props}
                  navigation={navigation}
                  route={route}
                  title="Cliente"
                  icon="plus"
                />
              );
            },
            headerTitleAlign: 'center',
          };
        }}
      />
      <Stack.Screen name="add" component={AddClients} options={{ title: 'Agregar cliente' }} />
      <Stack.Screen
        name="details"
        component={DetailsClients}
        options={{ title: 'Detalles del cliente' }}
      />
    </Stack.Navigator>
  );
};

export default StackRoot;
