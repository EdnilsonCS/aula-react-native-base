import React, { createContext, useCallback, useState, useContext } from 'react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: SignInCredentials | null;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<SignInCredentials | null>(null);
  const signOut = useCallback(() => {
    setUser(null);
  }, []);
  const signIn = ({ email, password }: SignInCredentials): void => {
    setUser({ email, password });
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
