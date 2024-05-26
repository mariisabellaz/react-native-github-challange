import React from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import {Skeleton} from '@components/molecules';

const SkeletonList = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6]}
      renderItem={() => <Skeleton />}
      keyExtractor={index => `${uuid.v4()}+${index}`}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SkeletonList;
