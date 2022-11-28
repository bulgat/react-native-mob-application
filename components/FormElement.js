import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableWithoutFeedback,Platform,
  TouchableHighlight, 
  TextInput} from 'react-native';

export default function FormElement({addHandler}) {
    const [textValue, setTextValue] = useState('');
    const onChange =(eventText) =>{
        setTextValue(eventText);
    }
  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='пишите'/>
        <Button title='Добавить' color={'green'} onPress ={()=>addHandler(textValue)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderColor:'yellow',
        padding:10,
        marginVertical:30,
        marginHorizontal:'20%',
        width:'60%'
    }
});