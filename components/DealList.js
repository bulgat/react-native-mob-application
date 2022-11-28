import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableWithoutFeedback,Platform,
  TouchableHighlight } from 'react-native';

export default function DealList(element,deleteHandler) {
    console.log( "hhh--",element.text);
  return (
    <TouchableHighlight onPress={()=>deleteHandler(element.key)}>
         <Text style={styles.deal}>{element.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    deal:{
        padding:20,
        textAlign:'center',
        borderRadius:5,
        backgroundColor:'green',
        borderWidth:1,
        marginTop:20,
        width:'70%',
        marginLeft:'20%'
    }
});