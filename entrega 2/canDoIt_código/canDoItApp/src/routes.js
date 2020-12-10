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

import MainScreen from './pages/main_screen/index.js';
import Concluidos from './pages/concluidos/index.js';
import Conquistas from './pages/conquistas/index.js';
import EscolhaMeta from './pages/escolher_metas/index.js';
import MetaFinanceira from './pages/criacao_meta_financeira/index.js';
import MetaFinanceira2 from './pages/criacao_meta_financeiraII/index.js';
import MenuFinanceiro from './pages/menu_financeiro/index.js';



export default function SnackScreens(){
  return(
    <NavigationContainer>
      
      <Snack.Navigator screenOptions = {{headerShown:false}}>
        <Snack.Screen name='MainScreen' component={MainScreen}/>
        <Snack.Screen name='Concluidos' component={Concluidos}/>
        <Snack.Screen name='Conquistas' component={Conquistas}/>
        <Snack.Screen name='EscolhaMeta' component={EscolhaMeta}/>
        <Snack.Screen name='CriacaoMetaFinanceira' component={MetaFinanceira}/>
        <Snack.Screen name='CriacaoMetaFinanceiraII' component={MetaFinanceira2}/>
        <Snack.Screen name='MetaDietaPersonalizada' component={MetaDietaPersonalizada}/>
        <Snack.Screen name='MetaDieta' component={MetaDieta}/>
        <Snack.Screen name='CriacaoMetaDieta' component={CriacaoMetaDieta}/>
        <Snack.Screen name='CriacaoMetaDietaII' component={CriacaoMetaDietaII}/>
        <Snack.Screen name='MenuFinanceiro' component={MenuFinanceiro}/>
        


      </Snack.Navigator>

    </NavigationContainer>
  );
}