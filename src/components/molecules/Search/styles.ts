import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  margin: ${({theme}) => theme.spacing.sm} 0;
`;

export const Input = styled(TextInput)`
  margin-left: ${({theme}) => theme.spacing.xs};

  text-align: left;
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSize.body};
  color: ${({theme}) => theme.colors.text.primary};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;

  background-color: ${({theme}) => theme.colors.background.gray};
  padding-left: ${({theme}) => theme.spacing.md};
  margin-right: ${({theme}) => theme.spacing.sm};
  border-radius: ${({theme}) => theme.radius.sm};
`;

export const Filter = styled.TouchableOpacity`
  width: 48px;
  height: 40px;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.background.gray};
  padding-right: ${({theme}) => theme.spacing.md};
  border-radius: ${({theme}) => theme.radius.sm};
`;
