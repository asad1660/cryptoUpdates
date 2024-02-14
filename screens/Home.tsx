import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { Crypto } from '../models/crypto';

const cryptoList:Crypto[] = [
    {
        id:'1',
        name:'BTC',
        price:3800.13
    },
    {
        id:'1',
        name:'ETH',
        price:3800.13
    }
]

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const navigateToDetail = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Pressable onPress={navigateToDetail}>
        <Text>Navigate to details</Text>
      </Pressable>
    </View>
  );
};
