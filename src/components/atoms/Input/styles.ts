import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  text-align: left;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 ${({theme}) => theme.spacing.md};

  border-radius: ${({theme}) => theme.radius.xs};
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: ${({theme}) => theme.spacing.xs};

  text-align: left;
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontSize.body};
  color: ${({theme}) => theme.colors.text.primary};
`;
