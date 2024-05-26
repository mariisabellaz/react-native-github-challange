import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View``;

export const TagContainer = styled.TouchableOpacity`
  height: 22px;
  background-color: ${({theme}) => theme.colors.button.icon};

  padding: 0 ${({theme}) => theme.spacing.md};
  margin-right: ${({theme}) => theme.spacing.sm};
  margin-bottom: ${({theme}) => theme.spacing.sm};
  border-radius: ${({theme}) => theme.radius.md};

  align-items: center;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
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
  width: 100%;

  background-color: ${({theme}) => theme.colors.background.gray};
  border-radius: ${({theme}) => theme.radius.sm};
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;

  padding: ${({theme}) => theme.spacing.sm};
  margin: ${({theme}) => theme.spacing.sm} 0;
`;
