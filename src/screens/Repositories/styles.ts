import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  margin-left: ${({theme}) => theme.spacing.sm};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.xl};
`;

export const Body = styled.View`
  flex-direction: row;
`;
