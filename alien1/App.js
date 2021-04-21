import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.Flex}>
        <Text style= {styles.Text}>방한칸 외계인</Text>
      </View>
      <View style = {styles.Flex2}>

      </View>
      
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:"column",

  },

  Flex:{
    flex :1,
    backgroundColor :"#395EC7",
    justifyContent: "flex-end"
  },

  Flex2:{
    flex :9,
    backgroundColor:"#fff"

  },
  Text:{
    textAlign:"left",
    fontSize : 20


  }
  

  
});
