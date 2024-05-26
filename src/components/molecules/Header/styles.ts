import styled from 'styled-components/native';

type Props = {
  top: number;
};

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${({top}) => top}px 0 ${({theme}) => theme.spacing.xl};
`;

export const ButtonIcon = styled.Pressable``;

export const Git = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100px;
  height: 40px;
`;
