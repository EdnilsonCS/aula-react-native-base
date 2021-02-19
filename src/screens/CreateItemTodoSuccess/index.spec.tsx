import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CreateItemTodoSuccess from './index';

const mockedHistoryPush = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
      navigate: mockedHistoryPush,
    }),
  };
});

describe('CreateItemTodoSuccess', () => {
  it('Should be able to render correct', () => {
    const tree = render(<CreateItemTodoSuccess />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to navigate to todo list ', () => {
    const { getByText } = render(<CreateItemTodoSuccess />);
    const buttonElement = getByText('Ok!');

    fireEvent.press(buttonElement);

    expect(mockedHistoryPush).toBeCalledWith('ListTodo');
  });
});
