/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Label>{children}</Label>
    </StyledButton>
  );
};

export default Button;
