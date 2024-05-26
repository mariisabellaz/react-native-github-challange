import {moderateScale} from 'react-native-size-matters';

type FontSize = {
  slogan: string;
  title: string;
  body: string;
  caption: string;
  info: string;
};

type FontFamily = {
  bold: string;
  italic: string;
  medium: string;
  regular: string;
};

export const fontSize: FontSize = {
  slogan: `${moderateScale(48)}px`,
  title: `${moderateScale(24)}px`,
  body: `${moderateScale(16)}px`,
  caption: `${moderateScale(14)}px`,
  info: `${moderateScale(12)}px`,
};

export const fontFamily: FontFamily = {
  bold: 'Mulish-Bold',
  italic: 'Mulish-Italic',
  medium: 'Mulish-Medium',
  regular: 'Mulish-Regular',
};
