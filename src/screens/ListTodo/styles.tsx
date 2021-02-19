import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { colors } from '@styles/index';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ItemTodo } from './index';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
`;

export const TodoList = styled(FlatList as new () => FlatList<ItemTodo>)`
  padding: 23px 24px 16px;
`;

export const Title = styled.Text``;

export const TextDescription = styled.Text``;

export const Header = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
  height: 90px;
  background-color: ${colors.orange};
`;

export const Icon = styled(FeatherIcon)``;
