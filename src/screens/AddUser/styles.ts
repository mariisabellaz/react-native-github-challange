import styled from 'styled-components/native';

type Props = {
  top: number;
};

export const Container = styled.View<Props>`
  flex: 1;
  margin-top: ${({top}) => top}px;
`;

export const Git = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 200px;
  height: 80px;
  align-self: center;
`;
