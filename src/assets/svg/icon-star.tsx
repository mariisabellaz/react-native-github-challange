import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const IconStar: FC<Props> = ({
  width = '14',
  height = '14',
  color = '#E5E5E5',
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 10.5L2.875 13L3.96875 8.3125L0.34375 5.15625L5.125 4.75L7 0.34375L8.875 4.75L13.6562 5.15625L10.0312 8.3125L11.125 13L7 10.5Z"
      fill={color}
    />
  </Svg>
);

export default IconStar;
