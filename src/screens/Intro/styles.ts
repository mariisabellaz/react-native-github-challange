import styled from 'styled-components/native';

type IntroProps = {
  bottom: number;
};

export const Container = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Git = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 260px;
  height: 100px;
`;

export const Bottom = styled.View<IntroProps>`
  flex: 1;
`;
