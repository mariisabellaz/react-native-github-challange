import {colors} from './colors';
import {fontFamily, fontSize} from './typography';
import {radius} from './radius';
import {spacing} from './spacing';

export type ThemeType = {
  colors: typeof colors;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
  radius: typeof radius;
  spacing: typeof spacing;
};

export const theme: ThemeType = {
  colors,
  fontFamily,
  fontSize,
  radius,
  spacing,
};
