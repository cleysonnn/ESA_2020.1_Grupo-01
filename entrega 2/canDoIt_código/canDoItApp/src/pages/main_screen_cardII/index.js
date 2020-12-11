import React from 'react';
import { View,Text,Image,ScrollView,TouchableOpacity,SafeAreaView } from 'react-native';

import engrenagem from '../../assets/assets/engrenagem.png';
import filtrar from '../../assets/assets/filtrar.png';
import target from '../../assets/assets/target.png';
import metaTarget from '../../assets/assets/metaTarget.png';
import concluidos from '../../assets/assets/concluidos.png';
import conquistas from '../../assets/assets/conquistas.png';
import {useNavigation} from '@react-navigation/native';
import card from '../../assets/assets/financeiraCard.png';
import plus from '../../assets/assets/plus.png';


import styles from './style';

export default function MainScreenCardII() {

    const navigation = useNavigation();

    function navigateToConcluidos(){
        navigation.navigate('Concluidos');

    }
    function navigateToConquistas(){
        navigation.navigate('Conquistas');

    }
    function navigateToMenuFinanceiro() {
        navigation.navigate('MenuFinanceiroII');
    }
    function navigateToEscolherMetas() {
        navigation.navigate('EscolhaMeta');
    }
    return (
    <View style={styles.safearea}>
        
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textInicial}>nome, Bem Vindo!</Text>
                <TouchableOpacity>
                    <Image source={engrenagem} style={styles.engrenagem} />
                </TouchableOpacity>
                
            </View>
        </View>


           
        <View style={styles.container2}>
            <View style={styles.minhasMetas}>
                <Text style={styles.textMinhasMetas}>Minhas metas  </Text> 
                <Text style={styles.textMinhasMetas}>(1)</Text>
                <TouchableOpacity>
                    <Image source={filtrar} style={styles.filtrar}/>
                </TouchableOpacity>
                
            </View>




            <View style={styles.mid}>
                <TouchableOpacity style={styles.target} onPress={()=>{navigateToMenuFinanceiro()}}>
                    <Image source={card} style={styles.card}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.plus} onPress={()=>{navigateToEscolherMetas()}}>
                    <Image source={plus}/>
                </TouchableOpacity>
            </View>   
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <Image source={metaTarget} style ={styles.metaTarget}/>

                <View style={styles.viewConcluidos}>
                    <TouchableOpacity style={styles.concluidos} onPress={()=>{navigateToConcluidos()}}>
                        <Image source={concluidos}/>
                        <Text style ={styles.textConcluidos}>Concluídos</Text>
                    </TouchableOpacity>
                     
                </View>

                <View style={styles.viewConcluidos}>
                    <TouchableOpacity style ={styles.conquistas} onPress={()=>{navigateToConquistas()}}>
                        <Image source={conquistas} style ={styles.conquistas}/>
                        <Text style ={styles.textConquistas}>Conquistas</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </View>
    
    );
}