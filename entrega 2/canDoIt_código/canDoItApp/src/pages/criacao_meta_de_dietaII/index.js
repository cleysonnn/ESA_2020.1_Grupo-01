import * as React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';


import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import styles from './style';





export default function CriacaoMetaDietaII(){

  const unSelectedOptionIconSource = '../../assets/icones/radio/uncheckedcheck-circle.png';
  const selectedOptionIconSource = '../../assets/icones/radio/selectedcheck-circle.png';

  

  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('CriacaoMetaDietaII');
  }

  const route = useRoute();


  
  const [meta, setMeta] = React.useState(route.params);


  return(
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <AntDesignIcon name='left' size={30} color={'#A70069'}/>
      
      </TouchableOpacity>
    
    </View>
    
    <View style={styles.iconContainer}>
      <Image source={require('../../assets/images/meta_dieta/Mask_GroupIcone_dieta.png')} style={styles.iconSize}/>
    
    </View>
    
    <Text style={styles.header}>
      DIETA

    </Text>

    <Text style={styles.title}>
      Qual o seu peso atual em KG?

    </Text>

    <View style={styles.inputStyle}>
      <TextInput
      placeholder={'Ex: 90.7'}
      keyboardType={"numeric"}
      autoFocus={true}
      style={styles.inputPlaceHolder}
      onChange={input => setMeta({pesoAtual: parseInt(input,10)/100})}/>

    </View>

    <Text style={styles.title}>
      Qual o seu peso estimado em KG?

    </Text>

    <View style={styles.inputStyle}>
      <TextInput
      placeholder={'Ex: 50.7'}
      style={styles.inputPlaceHolder}
      keyboardType={"numeric"}
      onChange={input => setMeta({pesoAtual: parseInt(input,10)/100})}/>
      
    </View>


    <TouchableOpacity
    onPress={()=>{
      navigateToHome()
    }} 
    style={styles.buttom}>
    <Text style={styles.textButtom}>
      Prosseguir
    </Text>
    </TouchableOpacity>

  </View>   
  );
}