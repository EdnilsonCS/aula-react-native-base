import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button } from '@components/index';
import { Container, Title, Description } from './styles';

const CreateItemTodoSuccess: React.FC = () => {
  const navigation = useNavigation();
  const handleToNavigationToNewItem = useCallback(() => {
    navigation.navigate('ListTodo');
  }, [navigation]);
  return (
    <Container>
      <Title>Parabéns</Title>
      <Description>Seu item foi criado com sucesso!</Description>
      <Button onPress={handleToNavigationToNewItem}>Ok!</Button>
    </Container>
  );
};

export default CreateItemTodoSuccess;
