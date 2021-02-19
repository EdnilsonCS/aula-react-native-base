import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ListTodo from './index';

const mockedHistoryPush = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
      navigate: mockedHistoryPush,
    }),
  };
});

const mockTodo = [
  {
    id: 'teste-id-1',
    title: 'title-fake-1',
    description: 'description-fake-2',
  },
  {
    id: 'teste-id-2',
    title: 'title-fake-1',
    description: 'description-fake-2',
  },
];

jest.mock('../../hooks/todo.tsx', () => {
  return {
    useTodo: () => ({
      todo: mockTodo,
    }),
  };
});

describe('List Todo', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  it('Should be able to render correct', () => {
    const tree = render(<ListTodo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to handle list of todo ', () => {
    const { getByTestId } = render(<ListTodo />);

    expect(getByTestId('teste-id-1')).toBeTruthy();
    expect(getByTestId('teste-id-2')).toBeTruthy();
  });

  it('Should ne able to navigate to createItemTodo', () => {
    const { getByTestId } = render(<ListTodo />);
    const buttonNewField = getByTestId('new-create-item');
    fireEvent.press(buttonNewField);
    expect(mockedHistoryPush).toHaveBeenCalledWith('CreateItemTodo');
  });
});
