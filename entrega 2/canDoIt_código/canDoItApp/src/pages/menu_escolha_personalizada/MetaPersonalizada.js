import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import metaP from '../images/metaP.png';
import buttonBack from '../images/buttonBack.png';

export default function metaPersonalizada(){
    return ( 
    <View style={Styles.container}>
        <TouchableOpacity style={Styles.buttonBack}>
        <Image source= {buttonBack}/>
        </TouchableOpacity>
        <Image source={metaP} />
        <Text style={Styles.text}>meta Personalizada</Text>
        <Text style={Styles.text1}>que tipo de meta deseja criar?</Text>
        <TouchableOpacity style={Styles.button1}>
          <Text style = {Styles.buttonText1}>FINANCEIRA</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button2}>
          <Text style = {Styles.buttonText2}>EXERCíCIO</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button3}>
          <Text style = {Styles.buttonText3}>DIETA</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button4}>
          <Text style = {Styles.buttonText4}>VíCIO</Text> 
        </TouchableOpacity>
    </View>
    );
}

const Styles = StyleSheet.create({
    
  container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      paddingTop: 15
    },

  text:{
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 15
  
  },
  
  text1:{
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 40
    
  },
  
  button1: {
    width: 320, 
    height:60, 
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: '#FFE32E',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems:'center'

  },

  buttonText1: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',

  },
 
  button2: {
    width: 320, 
    height:60, 
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: '#CD853F',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems:'center'

  },

  buttonText2: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',

  },  
  button3: {
    width: 320, 
    height:60, 
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: '#F65555',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems:'center'

  },

  buttonText3: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',

  },

  button4: {
    width: 320, 
    height:60, 
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: '#B349E5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems:'center'

  },

  buttonText4: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',

  },
  buttonBack: {
    alignSelf: 'flex-start',
    marginTop: 10,
    

  }
});