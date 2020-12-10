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
import MenuFinanceiroII from './pages/menu_financeiroII/index.js';
import MenuFinanceiroIII from './pages/menu_financeiroIII/index.js';
import MenuFinanceiroIV from './pages/menu_financeiroIV/index.js';

import MainScreenCard from './pages/main_screen_card/index.js';
import MainScreenCardII from './pages/main_screen_cardII/index.js';
import MainScreenCardIII from './pages/main_screen_cardIII/index.js';
import MainScreenCardIV from './pages/main_screen_cardIII/index.js';

import CriacaoMetaExercicio from './pages/criacao_meta_exercicio/MetaPersonalizadaExec1.js';
import CriacaoMetaExercicioII from './pages/criacao_meta_exercicio/MetaPersonalizadaExec2.js';
import CriacaoMetaVicio from './pages/criacao_meta_vicio_personalizado/index.js';
import CriacaoMetaVicioII from './pages/criacao_meta_vicio_personalizadoII/index.js';




export default function SnackScreens(){
  return(
    <NavigationContainer>
      
      <Snack.Navigator screenOptions = {{headerShown:false}}>
        <Snack.Screen name='MainScreen' component={MainScreen}/>
        <Snack.Screen name='Concluidos' component={Concluidos}/>
        <Snack.Screen name='Conquistas' component={Conquistas}/>
        <Snack.Screen name='EscolhaMeta' component={EscolhaMeta}/>
        <Snack.Screen name='CriacaoMetaVicio' component={CriacaoMetaVicio}/>
        <Snack.Screen name='CriacaoMetaVicioII' component={CriacaoMetaVicioII}/>
        <Snack.Screen name='CriacaoMetaFinanceira' component={MetaFinanceira}/>
        <Snack.Screen name='CriacaoMetaFinanceiraII' component={MetaFinanceira2}/>
        <Snack.Screen name='MetaDietaPersonalizada' component={MetaDietaPersonalizada}/>
        <Snack.Screen name='MetaDieta' component={MetaDieta}/>
        <Snack.Screen name='CriacaoMetaDieta' component={CriacaoMetaDieta}/>
        <Snack.Screen name='CriacaoMetaDietaII' component={CriacaoMetaDietaII}/>
        <Snack.Screen name='CriacaoMetaExercicio' component={CriacaoMetaExercicio}/>
        <Snack.Screen name='CriacaoMetaExercicioII' component={CriacaoMetaExercicioII}/>
        <Snack.Screen name='MenuFinanceiro' component={MenuFinanceiro}/>
        <Snack.Screen name='MenuFinanceiroII' component={MenuFinanceiroII}/>
        <Snack.Screen name='MenuFinanceiroIII' component={MenuFinanceiroIII}/>
        <Snack.Screen name='MenuFinanceiroIV' component={MenuFinanceiroIV}/>
        <Snack.Screen name="MainScreenCard" component={MainScreenCard}/>
        <Snack.Screen name="MainScreenCardII" component={MainScreenCardII}/>
        <Snack.Screen name="MainScreenCardIII" component={MainScreenCardIII}/>
        <Snack.Screen name="MainScreenCardIV" component={MainScreenCardIV}/>
        


      </Snack.Navigator>

    </NavigationContainer>
  );
}