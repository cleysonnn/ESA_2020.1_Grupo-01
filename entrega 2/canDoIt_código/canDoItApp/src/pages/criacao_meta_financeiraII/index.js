import React, {useState} from 'react';
import { TouchableOpacity,View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeMetaFinanceira from '../../assets/assets/iconeMetaFinanceira.png';
import prosseguirBackground from '../../assets/assets/prosseguirBackground.png';
import financeiraFormBackground from '../../assets/assets/financeiraFormBackground.png';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
export default function MetaFinanceira2() {
    
    const navigation = useNavigation();

    function navigateToPrevious(){
        navigation.navigate('CriacaoMetaFinanceira');

    }
    function navigateToNextStep(){
        navigation.navigate('MainScreenCardII');

    }

    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigateToPrevious()}}>
            <Image source={arrowBack} style={styles.arrowBack}/>
        </TouchableOpacity>
        
        <Image source={iconeMetaFinanceira} style={styles.iconeMetaFinanceira}/>
        <Text style={styles.textFinanceira}>FINANCEIRA</Text>

        <View style={styles.viewForms}>
            <Text style={styles.textQuantiaEstimada}>Qual a quantia estimada?</Text>
            <Image source={financeiraFormBackground} style={styles.financeiraFormBackground}/>
            <Text style={styles.textQuantiaAtual}>Qual a quantia atual?</Text>
            <Image source={financeiraFormBackground} style={styles.financeiraFormBackground}/>
        </View>

        <TouchableOpacity onPress={()=>{navigateToNextStep()}}>
            <Image source={prosseguirBackground} style={styles.prosseguirBackground}/>
            <Text style={styles.textProsseguir}>Prosseguir</Text>
        </TouchableOpacity>
        
    </View>

    );
}

