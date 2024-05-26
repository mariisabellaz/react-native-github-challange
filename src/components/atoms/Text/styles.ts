import styled, {css} from 'styled-components/native';

type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TypographyProps = {
  align?: 'center' | 'left' | 'right';
  underline?: boolean;
  type: 'slogan' | 'title' | 'button' | 'body' | 'caption' | 'info' | 'error';
  mt?: SpacingSize;
  ml?: SpacingSize;
  mr?: SpacingSize;
  mb?: SpacingSize;
  italic?: boolean;
  bold?: boolean;
  color?: 'primary' | 'secondary';
};

export const Label = styled.Text<TypographyProps>`
  text-decoration: ${({underline}) => (underline ? 'underline' : 'none')};
  text-align: ${({align = 'left'}) => align};

  margin-top: ${({theme, mt}) => (mt ? theme.spacing[mt] : 0)};
  margin-left: ${({theme, ml}) => (ml ? theme.spacing[ml] : 0)};
  margin-right: ${({theme, mr}) => (mr ? theme.spacing[mr] : 0)};
  margin-bottom: ${({theme, mb}) => (mb ? theme.spacing[mb] : 0)};

  ${({theme, type}) =>
    type === 'slogan' &&
    css`
      color: ${theme.colors.text.slogan};
      font-family: ${theme.fontFamily.bold};
      font-size: ${theme.fontSize.slogan};
    `};

  ${({theme, type}) =>
    type === 'title' &&
    css`
      color: ${theme.colors.text.header};
      font-family: ${theme.fontFamily.bold};
      font-size: ${theme.fontSize.title};
    `};

  ${({theme, type}) =>
    type === 'button' &&
    css`
      color: ${theme.colors.text.light};
      font-family: ${theme.fontFamily.regular};
      font-size: ${theme.fontSize.body};
    `};

  ${({theme, type, italic = false, bold = false, color = 'primary'}) =>
    type === 'body' &&
    css`
      color: ${theme.colors.text[color]};
      font-family: ${italic
        ? theme.fontFamily.italic
        : bold
        ? theme.fontFamily.bold
        : theme.fontFamily.regular};
      font-size: ${theme.fontSize.body};
    `};

  ${({theme, type, italic = false, bold = false}) =>
    type === 'error' &&
    css`
      color: ${theme.colors.text.error};
      font-family: ${italic
        ? theme.fontFamily.italic
        : bold
        ? theme.fontFamily.bold
        : theme.fontFamily.regular};
      font-size: ${theme.fontSize.caption};
    `};

  ${({theme, type, italic = false, color = 'primary'}) =>
    type === 'caption' &&
    css`
      color: ${theme.colors.text[color]};
      font-family: ${italic
        ? theme.fontFamily.italic
        : theme.fontFamily.regular};
      font-size: ${theme.fontSize.caption};
    `};

  ${({theme, type, italic = false, color = 'secondary'}) =>
    type === 'info' &&
    css`
      color: ${theme.colors.text[color]};
      font-family: ${italic
        ? theme.fontFamily.italic
        : theme.fontFamily.regular};
      font-size: ${theme.fontSize.info};
    `};
`;
