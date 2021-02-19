import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@screens/Login';
import CreateItemTodo from '@screens/CreateItemTodo';
import ListTodo from '@screens/ListTodo';
import CreateItemTodoSuccess from '@screens/CreateItemTodoSuccess';

const Stack = createStackNavigator();

const PublicRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateItemTodo" component={CreateItemTodo} />
      <Stack.Screen name="ListTodo" component={ListTodo} />
      <Stack.Screen
        name="CreateItemTodoSuccess"
        component={CreateItemTodoSuccess}
      />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
