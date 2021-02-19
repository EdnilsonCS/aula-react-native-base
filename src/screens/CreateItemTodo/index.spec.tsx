import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import CreateItemTodo from './index';

const mockedHistoryPush = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
      navigate: mockedHistoryPush,
    }),
  };
});

const mockedHandleAdd = jest.fn();
jest.mock('../../hooks/todo.tsx', () => {
  return {
    useTodo: () => ({
      handleAddItem: mockedHandleAdd,
    }),
  };
});

describe('CreateItemTodo', () => {
  it('Should be able to render correct', () => {
    const tree = render(<CreateItemTodo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should be able to add a new item', async () => {
    const { getByPlaceholderText, getByText } = render(<CreateItemTodo />);
    const descriptionField = getByPlaceholderText('Descrição');
    const titleField = getByPlaceholderText('Titulo');
    const buttonElement = getByText('Criar novo item');

    await act(async () => {
      fireEvent.changeText(titleField, '');
      fireEvent.changeText(descriptionField, '');
      fireEvent.changeText(titleField, 'fake-title');
      fireEvent.changeText(descriptionField, 'fake-description');
      fireEvent.press(buttonElement);
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith('CreateItemTodoSuccess');
    expect(mockedHandleAdd).toHaveBeenCalledWith({
      title: 'fake-title',
      description: 'fake-description',
    });
  });
});
