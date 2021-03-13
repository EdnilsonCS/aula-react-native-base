import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { colors } from '@styles/index';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ItemTodo } from './index';

export const Title = styled.Text`
  font-size: 20px;
`;

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
`;

export const TodoList = styled(FlatList as new () => FlatList<ItemTodo>)`
  padding: 23px 24px 16px;
`;

export const TitleItem = styled.Text``;

export const TextDescription = styled.Text``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90px;
  background-color: ${colors.orange};
`;

export const Icon = styled(FeatherIcon)``;

export const PlusButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
