import React, {useState} from 'react';
import {View,Text,Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeMetaFinanceira from '../../assets/assets/iconeMetaFinanceira.png';
import prosseguirBackground from '../../assets/assets/prosseguirBackground.png';

import styles from './style';

export default function MetaFinanceira() {
     
    const navigation = useNavigation();

    function navigateToPrevious(){
        navigation.navigate('MainScreen');

    }
    function navigateToNextStep(){
        navigation.navigate('CriacaoMetaFinanceiraII');

    }

    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigateToPrevious()}}>
            <Image source={arrowBack} style={styles.arrowBack}/>
        </TouchableOpacity>
        
        <Image source={iconeMetaFinanceira} style={styles.iconeMetaFinanceira}/>
         <Text style={styles.textFinanceira}>FINANCEIRA</Text>
        <Text style={styles.textQualSeuObjetivo}>Qual seu objetivo?</Text>

        <View style={styles.checkboxContainer}>
            <Text style={styles.textEconomizar}>Economizar</Text>
            <Text style={styles.textAcumular}>Acumular</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigateToNextStep()}}>
            <Image source={prosseguirBackground} style={styles.prosseguirBackground}/>
            <Text style={styles.textProsseguir}>Prosseguir</Text>
        </TouchableOpacity>
        
    </View>

    );
}