import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Icon = styled(IconFeather)`
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  align-self: center;
`;
