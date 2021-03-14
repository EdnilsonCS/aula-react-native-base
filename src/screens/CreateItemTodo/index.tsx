import React from 'react';
import { TextInput, Button } from '@components/index';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTodo } from '@hooks/todo';
import { useNavigation } from '@react-navigation/native';
import { Container, Icon, Title } from './styles';

interface TodoItem {
  title: string;
  description: string;
}

const Login: React.FC = () => {
  const { handleAddItem } = useTodo();
  const navigation = useNavigation();
  const schema = Yup.object().shape({
    description: Yup.string().required('Descrição é um campo obrigatório'),
    title: Yup.string().required('Titulo obrigatória'),
  });

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      title: '',
    },
  });
  const onSubmit = (data: TodoItem): void => {
    handleAddItem(data);
    navigation.navigate('CreateItemTodoSuccess');
  };
  return (
    <Container>
      <Icon name="plus-circle" size={200} />
      <Title>Criar um Novo Item</Title>
      <TextInput
        name="title"
        errors={errors}
        control={control}
        placeholder="Titulo"
        icon="edit-2"
        testID="title-input"
      />

      <TextInput
        name="description"
        errors={errors}
        control={control}
        placeholder="Descrição"
        icon="edit"
        testID="description-input"
      />

      <Button onPress={handleSubmit(onSubmit)}>Criar novo item</Button>
    </Container>
  );
};

export default Login;
