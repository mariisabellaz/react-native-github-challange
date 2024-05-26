import styled from 'styled-components/native';

export const CardContainer = styled.View.attrs({
  style: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
  },
})`
  width: 100%;

  background-color: ${({theme}) => theme.colors.background.gray};
  border-radius: ${({theme}) => theme.radius.sm};

  margin-bottom: ${({theme}) => theme.spacing.sm};
  padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.xl};
`;
