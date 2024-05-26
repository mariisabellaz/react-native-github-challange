import styled, {css} from 'styled-components/native';

export type AvatarProps = {
  width: number;
  height: number;
  rounded?: boolean;
  radius?: 'xs' | 'sm' | 'md' | 'lg';
};

export const ImageContainer = styled.Image.attrs({
  resizeMode: 'stretch',
})<AvatarProps>`
  ${({theme, width, height, rounded, radius}) =>
    css`
      width: ${width}px;
      height: ${height}px;
      border-radius: ${rounded
        ? `${width / 2}px`
        : radius
        ? theme.radius[radius]
        : 0};
    `};
`;
