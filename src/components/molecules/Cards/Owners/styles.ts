import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: ${({theme}) => theme.spacing.lg};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonCircle = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Top = styled.View`
  margin-top: ${({theme}) => theme.spacing.lg};
`;
