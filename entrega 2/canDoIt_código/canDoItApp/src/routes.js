import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Snack = createStackNavigator();

import CriacaoMetaDieta from './pages/criacao_meta_de_dieta';
import CriacaoMetaDietaII from './pages/criacao_meta_de_dietaII';
import HomeScreen from './pages/home-screen';

function SnackScreens(){
  return(
    
    
    <Snack.Navigator screenOptions = {{headerShown:false}}>
    
      <Snack.Screen name='CriacaoMetaDieta' component={CriacaoMetaDieta}/>
      <Snack.Screen name='CriacaoMetaDietaII' component={CriacaoMetaDietaII}/>


    </Snack.Navigator>);
  
}

export default function TabScreens(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Snack.Screen name='nackScreens' component={SnackScreens} />
        
      </Tab.Navigator>
      

    </NavigationContainer>
  );
}