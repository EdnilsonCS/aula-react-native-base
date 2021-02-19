import { TouchableOpacityProps, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles';

export const StyledButton = styled.TouchableOpacity.attrs(() => ({
  mode: 'contained',
  uppercase: false,
  labelStyle: {
    fontSize: 14,
  },
}))`
  background-color: ${colors.black};
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 96px;
  border-radius: 5px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  letter-spacing: 1.25px;
  font-size: 14px;
  line-height: 16px;
`;
