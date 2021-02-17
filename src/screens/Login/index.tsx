import React from 'react';
import { TextInput, Button } from '@components/index';
import * as Yup from 'yup';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/auth';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
  });

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
  };
  return (
    <View>
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
    </View>
  );
};

export default Login;
