import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableHighlight,TouchableWithoutFeedback,Platform,FlatList} from 'react-native';
  import Header from './components/Header';
  import DealList from './components/DealList';
import FormElement from './components/FormElement';
import { globStyle } from './styles/style';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Main from './components/Main';
import Contact from './components/Contact';
import MainStack from './navigate'

const fonts =()=>Font.loadAsync({
    'kol-bold':require('./assets/fonts/RussoOne-Regular.ttf'),
   'k-bold':require('./assets/fonts/Anton-Regular.ttf')
  })

export default function App() {
const [font,setFont] = useState(true);

  if(font) {
    return (
    <MainStack/>
    );
  } else {
    return (
      <AppLoading startAssync={fonts} onFinish={()=>setFont(true)} onError={console.warn}/>
    )
  }
}
const simpleKol ={color:'blue'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    color:'yellow'

  },

  box:{
    backgroundColor:"#000",
    width:'50%',
    height:150,
    opacity:0.5,
    borderWidth:2,
    borderColor:'silver',
    borderStyle:'dotted',
    top:Platform.OS==='android'? 50:30,
    left:150,
    position:'absolute'
  },
  mainBlock:{
    flex:1,
    backgroundColor:'green',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  mainBox:{
    flex:1,
    backgroundColor:'silver',
    width:100,
    height:100
  }
});
