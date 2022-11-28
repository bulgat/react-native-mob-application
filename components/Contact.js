import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableWithoutFeedback,Platform,
  TouchableHighlight, 
  TextInput} from 'react-native';
  import { globStyle } from '../styles/style';

export default function Contact({navigation,route}) {
  const loadScene=()=>{

    navigation.goBack();
  }
  return (
    <View style={globStyle.main}>
         <Text style={globStyle.title}>Страница МЫ</Text>
         <Image style={style.image} source={{uri:route.params.img}}/>
         <Text style={[globStyle,style.header]}>{route.params.name}</Text>
         <Text style={style.full}>{route.params.full}</Text>
         <Button title='Назад' onPress={loadScene}/>
    </View>
  );
}
const style = StyleSheet.create(
  {
    full:{
      fontFamily:'k-bold',
      fontSize:16,
      textAlign:'center',
      marginTop:20,
      color:'blue'
   },
   header:{
    fontSize:20,
    marginTop:25
   },
   image:{
    width:'100%',
    height:200
   }
  })