declare module '*.png' {
  import React from 'react';
  import {ImageProps} from 'react-native';

  const content: React.FC<ImageProps>;
  export default content;
}
