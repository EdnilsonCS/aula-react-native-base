/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isLight?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, isLight, ...props }) => {
  return (
    <StyledButton isLight={isLight} {...props}>
      <Label isLight={isLight}>{children}</Label>
    </StyledButton>
  );
};

export default Button;
