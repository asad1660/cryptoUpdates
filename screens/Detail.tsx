import React from 'react';
import {View, Text} from 'react-native';

export const DetailScreen = ({route}:{route:any}) => {
  const id = route.params.id
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{id}</Text>
    </View>
  );
};

