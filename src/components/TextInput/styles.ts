import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${colors.orange};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-width: 2px;
      border-color: ${colors.redLight};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-width: 2px;
      border-color: ${colors.black};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${colors.redLight};
  margin-top: 10px;
`;
