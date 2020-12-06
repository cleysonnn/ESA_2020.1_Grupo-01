import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Snack = createStackNavigator();

import CriacaoMetaDieta from './pages/criacao_meta_de_dieta';
import CriacaoMetaDietaII from './pages/criacao_meta_de_dietaII';
import MetaDieta from './pages/meta_dieta';

import HomeScreen from './pages/home-screen';
import MetaDietaPersonalizada from './pages/meta_dieta_personalizada';


function TabScreens(){
  return(

    <Tab.Navigator>
   
 
 
        <Tab.Screen name='Home' component={HomeScreen}/>


      </Tab.Navigator>
  )
    
    
    
  
}

export default function SnackScreens(){
  return(
    <NavigationContainer>
      
      <Snack.Navigator screenOptions = {{headerShown:false}}>
        <Snack.Screen name='MetaDietaPersonalizada' component={MetaDietaPersonalizada}/>
        <Snack.Screen name='MetaDieta' component={MetaDieta}/>
        <Snack.Screen name='TabScreens' component={TabScreens}/>
        <Snack.Screen name='CriacaoMetaDieta' component={CriacaoMetaDieta}/>
        <Snack.Screen name='CriacaoMetaDietaII' component={CriacaoMetaDietaII}/>
        


      </Snack.Navigator>

    </NavigationContainer>
  );
}