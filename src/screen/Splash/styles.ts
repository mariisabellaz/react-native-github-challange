import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled(LottieView)`
  flex: 1;
  width: ${width}px;
  height: ${height}px;
  background-color: ${({theme}) => theme.colors.primary};
`;
