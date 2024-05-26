import React, {FC} from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const IconButtonClose: FC<Props> = ({width = '16', height = '16'}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Circle cx="8" cy="8" r="8" fill="#FF5100" />
    <Path
      d="M10.9102 5.67578L8.58594 8L10.9102 10.3242L10.3242 10.9102L8 8.58594L5.67578 10.9102L5.08984 10.3242L7.41406 8L5.08984 5.67578L5.67578 5.08984L8 7.41406L10.3242 5.08984L10.9102 5.67578Z"
      fill="white"
    />
  </Svg>
);

export default IconButtonClose;
