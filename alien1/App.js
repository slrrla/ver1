import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.TopTitle}>
        <Text style= {styles.TextTitle}>방한칸 외계인</Text>
      </View>
      <View style = {styles.Content}>
        <Text>Content goes in here.</Text>
      </View>
      <View style = {styles.ToolBar}>
        <View style = {styles.Tools}>
          <Text>공구</Text>
        </View>
        <View style = {styles.Tools}>
          <Text>카메라</Text>
        </View>
        <View style = {styles.Tools}>
          <Text>메뉴</Text>
        </View>
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
  },

  TopTitle:{
    flex :1,
    backgroundColor :"#395EC7",
    justifyContent: "flex-end"
  },

  Content:{
    flex :10,
    backgroundColor:"##FFC0CB"
  },
  TextTitle:{
    textAlign:"left",
    fontSize : 20
  },
  ToolBar: {
    flex: 1,
    backgroundColor: "#395EC7",
    flexDirection: "row"
  },
  Tools: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20
  }

  
});
