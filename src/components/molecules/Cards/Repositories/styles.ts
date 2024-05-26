import styled from 'styled-components/native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled.View`
  margin-left: ${({theme}) => theme.spacing.lg};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Tooltip = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.sm};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: orange;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Top = styled.View`
  margin-top: ${({theme}) => theme.spacing.sm};
`;

export const TextWrapper = styled.View`
  width: ${moderateScale(180)}px;
`;
