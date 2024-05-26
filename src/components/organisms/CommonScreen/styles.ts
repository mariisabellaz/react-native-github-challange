import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.white};
  padding: ${({theme}) => theme.spacing.xl};
`;

export const HeaderContainer = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  padding: ${({theme}) => theme.spacing.lg};
`;
