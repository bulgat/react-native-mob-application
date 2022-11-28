import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableHighlight,TouchableWithoutFeedback,Platform } from 'react-native';

export default function Header() {

  return (
  <View style={styles.mainHead}>
    <Text style={styles.mainText}>Список дел</Text>
  </View>
  );
}
const simpleKol ={color:'blue'}
const styles = StyleSheet.create({
    mainHead:{
        paddingTop:50,
        height:100,
        backgroundColor:'silver',
        textAlign:'center'
    },
    mainText:{
        fontSize:40,
        color:'red',
        fontStyle:'bold'
    }
});