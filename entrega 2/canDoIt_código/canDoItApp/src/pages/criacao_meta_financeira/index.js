import React, {useState} from 'react';
import {View,Text,Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeMetaFinanceira from '../../assets/assets/iconeMetaFinanceira.png';
import prosseguirBackground from '../../assets/assets/prosseguirBackground.png';

import styles from './style';

export default function MetaFinanceira() {
    /*const unSelectedOptionIconSource = '../../assets/icones/radio/uncheckedcheck-circle.png';
    const selectedOptionIconSource = '../../assets/icones/radio/selectedcheck-circle.png';

    const navigation = useNavigation();

    const [meta, setMeta] = React.useState ({
        tipo: 'dieta',
        objetivo: null,
        quantiaEstimada: 0,
        quantiaAtual: 0
    });

    function navigateToNextStep(){
        navigation.navigate('CriacaoMetaFinanceiraII',meta);
    }*/

    return(
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={arrowBack} style={styles.arrowBack}/>
        </TouchableOpacity>
        
        <Image source={iconeMetaFinanceira} style={styles.iconeMetaFinanceira}/>
         <Text style={styles.textFinanceira}>FINANCEIRA</Text>
        <Text style={styles.textQualSeuObjetivo}>Qual seu objetivo?</Text>

        <View style={styles.checkboxContainer}>
            <Text style={styles.textEconomizar}>Economizar</Text>
            <Text style={styles.textAcumular}>Acumular</Text>
        </View>
        <TouchableOpacity>
            <Image source={prosseguirBackground} style={styles.prosseguirBackground}/>
            <Text style={styles.textProsseguir}>Prosseguir</Text>
        </TouchableOpacity>
        
    </View>

    );
}