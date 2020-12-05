import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import styles from './style';





export default function CriacaoMetaDieta(){

  const unSelectedOptionIconSource = '../../assets/icones/radio/uncheckedcheck-circle.png';
  const selectedOptionIconSource = '../../assets/icones/radio/selectedcheck-circle.png';

  const navigation = useNavigation();


  
  const [meta, setMeta] = React.useState({
    tipo: 'dieta',
    objetivo: null,
    pesoAtual: 0,
    pesoEstimado: 0,
  });


  function navigateToNextStep(){
    navigation.navigate('CriacaoMetaDietaII',meta);
  }


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
      Qual o seu objetivo?

    </Text>

    <View style={styles.optionContainer}>
      <TouchableOpacity 
      style={styles.option}
      onPress={()=>{
        if(meta.objetivo === 'Perder peso'){
          setMeta({
            objetivo: null,
          
          })


          return;
        }
        setMeta({
          objetivo: 'Perder peso'
        });
      }}>
        { meta.objetivo === 'Perder peso' ?
          <Image source={require(selectedOptionIconSource)} style={styles.optionMarkerSize}/>
        :
          <Image source={require(unSelectedOptionIconSource)} style={styles.optionMarkerSize}/>
        }
        
        
        <Text style={styles.textOption}>
          Perder peso
        
        </Text>
      
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.option}
      onPress={()=>{
        if(meta.objetivo === 'Ganhar peso'){
          setMeta({
            objetivo: null,
          
          })


          return;
        }
        setMeta({
          objetivo: 'Ganhar peso'
        });
      }}>
        { meta.objetivo === 'Ganhar peso' ?
          <Image source={require(selectedOptionIconSource)} style={styles.optionMarkerSize}/>
        :
          <Image source={require(unSelectedOptionIconSource)} style={styles.optionMarkerSize}/>
        }
        
        <Text style={styles.textOption}>
          Ganhar peso
        
        </Text>
      
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.buttom}
    onPress={()=>{
      navigateToNextStep();
    }}>
    <Text style={styles.textButtom}>
      Prosseguir
    </Text>
    </TouchableOpacity>

  </View>   
  );
}