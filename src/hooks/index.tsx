import React from 'react';

import { AuthProvider } from './auth';
import { TodoProvider } from './todo';

const AppProvider: React.FC = ({ children }) => (
  <TodoProvider>
    <AuthProvider>{children}</AuthProvider>
  </TodoProvider>
);

export default AppProvider;
