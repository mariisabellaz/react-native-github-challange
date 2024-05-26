import React, {FC} from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const IconButtonPlus: FC<Props> = ({width = '16', height = '16'}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Circle cx="8" cy="8" r="8" fill="white" />
    <Path
      d="M10.9102 8.41016H8.41016V10.9102H7.58984V8.41016H5.08984V7.58984H7.58984V5.08984H8.41016V7.58984H10.9102V8.41016Z"
      fill="black"
    />
  </Svg>
);

export default IconButtonPlus;
