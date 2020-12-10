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

//telas adcionadas por mim (artur)

import MainScreen from './screens/main_screen/index.js';
import Concluidos from './screens/concluidos/index.js';
import Conquistas from './screens/conquistas/index.js';
import EscolhaMeta from './screens/escolher_metas/index.js';
import MetaFinanceira from './screens/criacao_meta_financeira/index.js';
import MetaFinanceira2 from './screens/criacao_meta_financeiraII/index.js';




function TabScreens(){
  return(

    <Tab.Navigator>
        
        <Tab.Screen name='MainScreen' component={MainScreen}/>
        <Tab.Screen name='Concluidos' component={Concluidos}/>
        <Tab.Screen name='Conquistas' component={Conquistas}/>


 
        <Tab.Screen name='Home' component={HomeScreen}/>


      </Tab.Navigator>
  )
    
    
    
  
}

export default function SnackScreens(){
  return(
    <NavigationContainer>
      
      <Snack.Navigator screenOptions = {{headerShown:false}}>
        <Snack.Screen name='TabScreens' component={TabScreens}/>
        <Snack.Screen name='EscolhaMeta' component={EscolhaMeta}/>
        <Snack.Screen name='CriacaoMetaFinanceira' component={MetaFinanceira}/>
        <Snack.Screen name='CriacaoMetaFinanceiraII' component={MetaFinanceira2}/>
        <Snack.Screen name='MetaDietaPersonalizada' component={MetaDietaPersonalizada}/>
        <Snack.Screen name='MetaDieta' component={MetaDieta}/>
        <Snack.Screen name='CriacaoMetaDieta' component={CriacaoMetaDieta}/>
        <Snack.Screen name='CriacaoMetaDietaII' component={CriacaoMetaDietaII}/>
        


      </Snack.Navigator>

    </NavigationContainer>
  );
}