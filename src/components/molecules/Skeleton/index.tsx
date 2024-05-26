import React from 'react';
import {useTheme} from 'styled-components/native';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {Card} from '@components/atoms';

const Skeleton = ({props}: any) => {
  const theme = useTheme();

  return (
    <Card>
      <ContentLoader
        speed={2}
        width={'100%'}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor={theme.colors.skeleton}
        foregroundColor="#ecebeb"
        {...props}>
        <Rect x="88" y="20" rx="5" ry="5" width="200" height="8" />
        <Rect x="88" y="40" rx="5" ry="5" width="150" height="8" />
        <Rect x="0" y="90" rx="5" ry="5" width="100%" height="8" />
        <Circle cx="38" cy="38" r="38" />
      </ContentLoader>
    </Card>
  );
};

export default Skeleton;
