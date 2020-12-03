import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';





export default function HomeScreen(){
  const navigation = useNavigation();

  function navigateToCriarMetaVicio(){
    navigation.navigate('CriacaoMetaDieta');

  }

  return(
    <View>
      <TouchableOpacity onPress={()=>{navigateToCriarMetaVicio()}}>
        <Text>
          criar meta
        </Text>
      </TouchableOpacity>
    </View>
  )
}