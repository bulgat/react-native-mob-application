import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button, 
  Alert,Image,TouchableHighlight,TouchableWithoutFeedback,Platform,TextInput } from 'react-native';
import { Formik } from 'formik';

export default function Form({addArticle}) {
    
  return (
      <View>

        <Formik initialValues={{name:'',anons:'---',full:'',img:'https://ic.pics.livejournal.com/lumixograf/31636610/3801118/3801118_1000.jpg'}} onSubmit={(value,action)=>{
             addArticle(value);
             action.resetForm();
        }}>
       {(propsKol)=>(
        <View>
            <TextInput 
            style={styles.input}
            value={propsKol.values.name}
            placeholder='название'
            onChangeText={propsKol.handleChange('name')}/>
             <TextInput 
             style={styles.input}
            value={propsKol.values.anons}
            placeholder='введите анонс'
            multiline
            onChangeText={propsKol.handleChange('anons')}/>
            <TextInput 
            style={styles.input}
            value={propsKol.values.full}
            placeholder='введите статью'
            multiline
            onChangeText={propsKol.handleChange('full')}/>
            <TextInput 
            style={styles.input}
            value={propsKol.values.img}
            placeholder='рисунок'
            onChangeText={propsKol.handleChange('img')}/>
            <Button title='доюавить' onPress={propsKol.handleSubmit}/>
        </View>
       )}
        </Formik>
      </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    marginTop:15,
    padding:10,
    borderColor:'silver',
    borderRadius:5
  }
});