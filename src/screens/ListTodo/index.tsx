import { useTodo } from '@hooks/todo';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import {
  TodoList,
  Container,
  Title,
  TextDescription,
  Header,
  Icon,
  TitleItem,
  PlusButton,
} from './styles';

export interface ItemTodo {
  id: string;
  title: string;
  description: string;
}

const ListTodo: React.FC = () => {
  const { todo } = useTodo();
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: ItemTodo }): React.ReactElement => {
    return (
      <View
        key={item.id}
        testID={item.id}
        style={{ borderColor: 'black', borderWidth: 1, padding: 20 }}
      >
        <TitleItem>Titulo: {item.title}</TitleItem>
        <TextDescription>Descrição: {item.description}</TextDescription>
      </View>
    );
  };
  const handleToNavigationToNewItem = useCallback(() => {
    navigation.navigate('CreateItemTodo');
  }, [navigation]);
  return (
    <Container>
      <Header>
        <Title>Lista de itens</Title>
        <PlusButton
          onPress={handleToNavigationToNewItem}
          testID="new-create-item"
        >
          <Icon size={40} name="plus-circle" />
        </PlusButton>
      </Header>
      <TodoList renderItem={renderItem} data={todo} />
    </Container>
  );
};

export default ListTodo;
