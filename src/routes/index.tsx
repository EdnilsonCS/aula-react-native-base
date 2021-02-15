import React from 'react';
import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
