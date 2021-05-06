import { StatusBar } from 'expo-status-bar';
import React,{Fragment}  from 'react';
import { StyleSheet, Text, View, ViewPropTypes,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import icons,header
//https://reactnativeelements.com/docs/icon/#component
import { Icon,Header } from 'react-native-elements';



const header= ()=>{

  {/*title tab with search and list icons and buttons*/}
 
    return(
        <Header
        leftComponent = {{text:"홈어",style : styles.TextTitle}}
        rightComponent = {{icon:"search",color:"#fff",size:30}}
        containerStyle={{
          backgroundColor :"#395EC7",
          alignItems:"flex-end",
          size :100
        }}
  
        
      />
    )

}

