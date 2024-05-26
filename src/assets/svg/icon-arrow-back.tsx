import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const IconArrowBack: FC<Props> = ({
  width = '22',
  height = '22',
  color = '#000',
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      d="M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z"
      fill={color}
    />
  </Svg>
);

export default IconArrowBack;
