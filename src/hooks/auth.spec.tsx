import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';
import { AuthProvider, useAuth } from './auth';

describe('Auth hook', () => {
  it('should be able to login', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    const mockLogin = {
      email: 'jhondoe@example.com.br',
      password: '123456',
    };
    await waitFor(() => {
      result.current.signIn(mockLogin);
    });

    expect(result.current.user).toEqual(mockLogin);
  });

  it('should be able to logout', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    const mockLogin = {
      email: 'jhondoe@example.com.br',
      password: '123456',
    };
    await waitFor(() => {
      result.current.signIn(mockLogin);

      expect(result.current.user).toEqual(mockLogin);

      result.current.signOut();
    });

    expect(result.current.user).toBeNull();
  });
});
