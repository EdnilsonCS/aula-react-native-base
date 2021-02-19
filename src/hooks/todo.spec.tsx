import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';
import { TodoProvider, useTodo } from './todo';

jest.mock('uuid', () => {
  return {
    v4: jest.fn().mockImplementation(() => 'teste-id'),
  };
});

describe('Todo hook', () => {
  it('should be able to add a new Item', async () => {
    const { result } = renderHook(() => useTodo(), {
      wrapper: TodoProvider,
    });
    const mockLogin = {
      title: 'Teste 1',
      description: 'Teste 1 description',
    };
    await waitFor(() => {
      result.current.handleAddItem(mockLogin);
    });

    expect(result.current.todo).toEqual([{ ...mockLogin, id: 'teste-id' }]);
    expect(result.current.todo.length).toEqual(1);
  });

  it('should be able to remove a item', async () => {
    const { result } = renderHook(() => useTodo(), {
      wrapper: TodoProvider,
    });
    const mockLogin = {
      title: 'Teste 1',
      description: 'Teste 1 description',
    };
    await waitFor(() => {
      result.current.handleAddItem(mockLogin);
      expect(result.current.todo).toEqual([{ ...mockLogin, id: 'teste-id' }]);
      expect(result.current.todo.length).toEqual(1);

      result.current.handleDeleteItem('test-id');
      expect(result.current.todo.length).toEqual(0);
    });
  });
});
