import React from 'react';
import { TextInput, Button } from '@components/index';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { Container, Icon, Title } from './styles';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
  });
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: LoginData): void => {
    signIn(data);
    navigation.navigate('ListTodo');
  };
  return (
    <Container>
      <Icon name="clipboard" size={200} />
      <Title>TODO</Title>
      <TextInput
        name="email"
        errors={errors}
        control={control}
        placeholder="Email"
        icon="mail"
      />

      <TextInput
        name="password"
        errors={errors}
        control={control}
        placeholder="Senha"
        icon="mail"
      />

      <Button onPress={handleSubmit(onSubmit)}>Login</Button>
    </Container>
  );
};

export default Login;
