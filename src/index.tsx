import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from '@hooks/index';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
