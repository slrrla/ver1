import { StatusBar } from 'expo-status-bar';
import React,{Fragment}  from 'react';
import { StyleSheet, Text, View, ViewPropTypes,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Dimensions } from 'react-native';

// import BottmTabNavigator to remove space form bottom 
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import BottomButton from './components';


//import icons
//https://reactnativeelements.com/docs/icon/#component
import { Icon } from 'react-native-elements';





    
export default function App() {
  return (

        
    <View style={styles.container}>
      {/*title tab with search and list icons and buttons*/}
      
        <View style = {styles.TopTitle}>   
          <Text style= {styles.TextTitle}>홈어</Text> 
          <View icon1 
              
            >
              <Icon
              name = 'search'
              color ='#fff'
              />

            </View>
        </View>
   
      {/*content goes here */}
      <View style = {styles.Content}>
        <Text style = {styles.Text}>Content goes in here.</Text>
      </View>
    

    
    {/*toolbar icons and buttons */}
      <View style = {styles.ToolBar}>
        <View style = {styles.Tools}>
          <Icon
          name = 'fix'
          color ='#fff'
          />
        </View>
        <View style = {styles.Tools}>
        <Icon
          name = 'camera'
          color ='#fff'
          />
        </View>
        <View style = {styles.Tools}>
          <Icon
          name = 'menu'
          color ='#fff'
          />
        </View>



      </View>
      <StatusBar style="inverted" />
      </View>




);
}

const styles = StyleSheet.create({
  
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,



  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  TopTitle:{
    flex :1,
    backgroundColor :"#395EC7",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  Content:{
    flex :15,
    justifyContent: "center"
  },
  TextTitle:{
    textAlign:"left",
    fontSize : 30,
    color :"#fff",
    alignItems:"center"
    
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
  },
  Text: {
    textAlign: "center",
    fontSize: 50
  },
  ToolTop: {

  }
  
});
