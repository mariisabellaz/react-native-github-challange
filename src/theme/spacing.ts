import {moderateScale} from 'react-native-size-matters';

type Spacing = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export const spacing: Spacing = {
  xs: `${moderateScale(4)}px`,
  sm: `${moderateScale(8)}px`,
  md: `${moderateScale(14)}px`,
  lg: `${moderateScale(16)}px`,
  xl: `${moderateScale(24)}px`,
  xxl: `${moderateScale(32)}px`,
};
