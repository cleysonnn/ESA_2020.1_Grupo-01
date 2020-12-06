import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';





export default function HomeScreen(){
  const navigation = useNavigation();

  function navigateToCriarMetaDieta(){
    navigation.navigate('CriacaoMetaDieta');

  }
  function navigateToMetaVicio(){
    navigation.navigate('MetaDieta');

  }

  return(
    <View>
      <TouchableOpacity onPress={()=>{navigateToCriarMetaDieta()}}>
        <Text>
          criar meta dieta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigateToMetaVicio()}}>
        <Text>
          criar meta dieta
        </Text>
      </TouchableOpacity>

    </View>
  )
}