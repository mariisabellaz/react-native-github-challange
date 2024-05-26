import styled from 'styled-components/native';

type Props = {
  top?: number;
  bottom?: number;
};

export const Container = styled.View<Props>`
  flex: 2;
  margin-top: ${({top}) => top}px;
`;

export const Git = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 200px;
  height: 80px;
  align-self: center;
`;

export const Bottom = styled.View<Props>`
  flex: 1;
  position: absolute;
  bottom: 0;

  margin-bottom: ${({bottom}) => bottom}px;
  align-self: center;
`;
