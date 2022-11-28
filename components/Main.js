import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableWithoutFeedback,Platform,
  TouchableHighlight, 
  TextInput,Modal} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
  import { globStyle } from '../styles/style';
  import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({navigation}) {
      
    const [news,setNews] = useState(
      [
        {name:'Google',anons:'google cool',full:'google cool cool cool cool cool',key:'1',
        img:'https://alev.cc/wp-content/uploads/2022/11/ztf-discovers-1000-supernova.jpg'},
        {name:'Apple',anons:'google cool',full:'google cool cool cool cool cool',key:'2',
        img:'https://ic.pics.livejournal.com/korolevvlad/84093778/4140680/4140680_original.jpg'},
        {name:'Android',anons:'google cool',full:'google cool cool cool cool cool',key:'3',
        img:'https://avatars.dzeninfra.ru/get-zen_doc/1639101/pub_638075bad4ffc44ed6c2a58a_6380977aedce867779d9e521/scale_1200'}
      ]
    );

  const loadScene=()=>{

    navigation.navigate('Contact');
  }
  const [modalWindow,setModalWindow] = useState(false);
  
  const addArticle=(article)=>{
    console.log("0002 navig article = ",article)
    article.key = Math.random().toString();
    setNews((list)=>{return [
      article,
      ...news
  ]});
    console.log("0001 nav  news == ",news)
    setModalWindow(false);
  }
    
  
  return (
    <View style={globStyle.main}>
      <Modal visible={modalWindow}>
        
        <View style={globStyle.main}>
          <Ionicons name='close-circle' size={24} color='red' style={style.iconClose} onPress={()=>setModalWindow(false)}/>
          <Text style={style.title}>Форма добавления статей</Text>

          <Form addArticle={addArticle}/>
    
        </View>
      </Modal>
      <Ionicons name='add-circle' size={24} color='black' style={style.iconAdd} onPress={()=>setModalWindow(true)}/>
         <Text style={[globStyle.title,style.header]}>Главная стран.</Text>
         <FlatList data={news} renderItem={({item})=>(
          <TouchableOpacity  style={style.items} onPress={()=>navigation.navigate('Contact',item)}>
            <Image style={style.image} source={{uri:item.img}}/>
            <Text style={style.title}>{item.name}</Text>
            <Text style={style.anons}>{item.anons}</Text>
          </TouchableOpacity>
         )
         }></FlatList>
         <Button title='Открыть страницу' onPress={loadScene}/>
    </View>
  );
 
}

const style = StyleSheet.create(
  {
    title:{
      fontFamily:'kol-bold',
      fontSize:22,
      textAlign:'center',
      marginTop:20,
      color:'green'
    },
    anons:{
      fontFamily:'k-bold',
      fontSize:16,
      textAlign:'center',
      marginTop:5,
      color:'green'
    },
    items:{
      width:'100%',
      marginBottom:30
    },
    header:{
      marginBottom:30
    },
    image:{
      width:100,
      height:100
    },
    iconAdd:{
      textAlign:'center',
      marginBottom:15
    },
    iconClose:{
      textAlign:'center'
    }
  }
)