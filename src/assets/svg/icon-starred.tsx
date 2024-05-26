import React, {FC} from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const IconStarred: FC<Props> = ({width = '24', height = '24'}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#FFF6D6" fill-opacity="0.1" />
    <Path
      d="M12 15.5L7.875 18L8.96875 13.3125L5.34375 10.1562L10.125 9.75L12 5.34375L13.875 9.75L18.6562 10.1562L15.0312 13.3125L16.125 18L12 15.5Z"
      fill="#FFC700"
    />
  </Svg>
);

export default IconStarred;
