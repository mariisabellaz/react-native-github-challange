import React, {FC} from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const IconDelete: FC<Props> = ({width = '24', height = '24'}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#E8E8E8" />
    <Path
      d="M17.2383 5.23828V6.75H6.76172V5.23828H9.36328L10.1367 4.5H13.8633L14.6367 5.23828H17.2383ZM7.5 16.4883V7.48828H16.5V16.4883C16.5 16.8867 16.3477 17.2383 16.043 17.543C15.7383 17.8477 15.3867 18 14.9883 18H9.01172C8.61328 18 8.26172 17.8477 7.95703 17.543C7.65234 17.2383 7.5 16.8867 7.5 16.4883Z"
      fill="#FF5100"
    />
  </Svg>
);

export default IconDelete;
