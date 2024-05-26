import React, {FC} from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const IconEdit: FC<Props> = ({width = '17', height = '16'}) => (
  <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
    <Circle cx="8.97827" cy="8" r="8" fill="#FF5100" />
    <Path
      d="M12.6111 5.92969L11.8494 6.69141L10.2869 5.12891L11.0486 4.36719C11.1267 4.28906 11.2244 4.25 11.3416 4.25C11.4587 4.25 11.5564 4.28906 11.6345 4.36719L12.6111 5.34375C12.6892 5.42188 12.7283 5.51953 12.7283 5.63672C12.7283 5.75391 12.6892 5.85156 12.6111 5.92969ZM5.22827 10.1875L9.83765 5.57812L11.4001 7.14062L6.79077 11.75H5.22827V10.1875Z"
      fill="white"
    />
  </Svg>
);

export default IconEdit;
