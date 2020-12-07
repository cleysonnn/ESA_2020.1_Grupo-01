import React, {useState} from 'react';
import { CheckBox,View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../assets/arrowBack.png';
import iconeMetaFinanceira from '../assets/iconeMetaFinanceira.png';
import prosseguirBackground from '../assets/prosseguirBackground.png';
import financeiraFormBackground from '../assets/financeiraFormBackground.png';

export default function MetaFinanceira2() {

    return(
    <View style={styles.container}>
        <Image source={arrowBack} style={styles.arrowBack}/>
        <Image source={iconeMetaFinanceira} style={styles.iconeMetaFinanceira}/>
        <Text style={styles.textFinanceira}>FINANCEIRA</Text>

        <View style={styles.viewForms}>
            <Text style={styles.textQuantiaEstimada}>Qual a quantia estimada?</Text>
            <Image source={financeiraFormBackground} style={styles.financeiraFormBackground}/>
            <Text style={styles.textQuantiaAtual}>Qual a quantia atual?</Text>
            <Image source={financeiraFormBackground} style={styles.financeiraFormBackground}/>
        </View>

        <Image source={prosseguirBackground} style={styles.prosseguirBackground}/>
        <Text style={styles.textProsseguir}>Prosseguir</Text>
    </View>

    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center'
    },
    arrowBack: {
        top: 30,
        right: 170
    },
    iconeMetaFinanceira: {
        marginTop: 50,
        height:115,
        width:115,
    },
    textFinanceira: {
        marginTop: 28,
        marginBottom: 60,
        fontWeight: 'bold',
        fontSize: 20
    },
    viewForms: {
        alignItems: 'center'

    },
    textQuantiaEstimada: {
        fontSize: 22,
        marginBottom: 25
    },
    textQuantiaAtual: {
        fontSize: 22,
        marginBottom: 25
    },
    financeiraFormBackground: {
        height:  40,
        width: 258,
        marginBottom: 40
    },
    prosseguirBackground: {
        marginTop: 40,
        height: 58,
        width: 310
    },

    textProsseguir: {
        fontSize: 23,
        bottom: 47,
    }




})