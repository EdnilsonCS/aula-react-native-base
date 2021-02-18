/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Login from '.';

const mockedSignIn = jest.fn();
jest.mock('../../hooks/auth.tsx', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});
describe('Login page', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
  });
  it('renders correctly', () => {
    const tree = render(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to sign', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailField = getByPlaceholderText('Email');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Login');

    await act(async () => {
      fireEvent.changeText(emailField, '');
      fireEvent.changeText(passwordField, '');
      fireEvent.changeText(emailField, 'ednilson@gmail.com');
      fireEvent.changeText(passwordField, '123456');
      fireEvent.press(buttonElement);
    });

    expect(mockedSignIn).toHaveBeenCalled();
  });

  it('should not be able to sign with fields empty', async () => {
    const { getByText } = render(<Login />);

    const buttonElement = getByText('Login');

    await act(async () => {
      fireEvent.press(buttonElement);
    });
    const labelErrorEmail = getByText('E-mail obrigatório');
    expect(labelErrorEmail).toBeTruthy();
    const labelErrorPassword = getByText('Senha obrigatória');
    expect(labelErrorPassword).toBeTruthy();
    expect(mockedSignIn).not.toHaveBeenCalled();
  });
});
