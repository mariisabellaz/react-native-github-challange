import styled, {css} from 'styled-components/native';

type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ButtonProps = {
  type: 'full' | 'medium';
  mt?: SpacingSize;
  ml?: SpacingSize;
  mr?: SpacingSize;
  mb?: SpacingSize;
  background?: 'primary' | 'secondary';
};

export const CardContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({theme, background = 'primary'}) =>
    theme.colors.button[background]};
  border-radius: ${({theme}) => theme.radius.xl};

  align-items: center;
  justify-content: center;

  margin-top: ${({theme, mt}) => (mt ? theme.spacing[mt] : 0)};
  margin-left: ${({theme, ml}) => (ml ? theme.spacing[ml] : 0)};
  margin-right: ${({theme, mr}) => (mr ? theme.spacing[mr] : 0)};
  margin-bottom: ${({theme, mb}) => (mb ? theme.spacing[mb] : 0)};

  ${({type}) =>
    type === 'full' &&
    css`
      width: 100%;
      height: 50px;
      align-self: center;
    `};

  ${({type}) =>
    type === 'medium' &&
    css`
      width: 155px;
      height: 40px;
    `};
`;

export const RowContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  margin-left: ${({theme}) => theme.spacing.md};
`;
