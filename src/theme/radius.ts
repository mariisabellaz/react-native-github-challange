import {moderateScale} from 'react-native-size-matters';

type Radius = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export const radius: Radius = {
  xs: `${moderateScale(4)}px`,
  sm: `${moderateScale(8)}px`,
  md: `${moderateScale(12)}px`,
  lg: `${moderateScale(32)}px`,
  xl: `${moderateScale(40)}px`,
};
