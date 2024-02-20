import React from 'react';
import {View, Text, Pressable , FlatList, StyleSheet} from 'react-native';
import { Crypto } from '../models/crypto';
import io from 'socket.io-client';

const socket = io('http://192.168.18.89:3000')
socket.on('connect', ()=>{
  console.log('socket connected')
} )

const cryptoList:Crypto[] = [
    {
        id:'1',
        name:'BTC',
        price:3800.13
    },
    {
        id:'2',
        name:'ETH',
        price:3800.13
    },
    {
        id:'3',
        name:'SOL',
        price:250.13
    }

]



export const HomeScreen = ({navigation}: {navigation: any}) => {
  const openCryptoDetail = (id:string) => {
    navigation.navigate('Detail', {id:id});
  };
  const renderItem = ({item}: {item:Crypto}) => {
    return (
       <Pressable style={styles.crypto} onPress={()=>openCryptoDetail(item.id)}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        </Pressable> 
    )
}
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#272d42',
    flex:1,
    color:"#fff"
  }
  ,
  crypto : {
    borderRadius:5,
    borderWidth:1,
    backgroundColor:"#000",
    padding: 20,
    flex:1,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  name:{
    color:'#fff',
    fontSize:24, 
  },
  price:{
    color:'#ffab00',
    fontSize:28, 
  }
})
