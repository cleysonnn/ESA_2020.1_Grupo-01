import React, {useState} from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../assets/arrowBack.png';
import iconeMetaVicio from '../assets/iconeVicio.png';
import vicioFormBackground from'../assets/vicioFormBackground.png';
import arrowDropDown from '../assets/arrowDropDown.png';
import prosseguirBackground from '../assets/backgroundProsseguirVicio.png';

export default function MetaVicioPersonalizada() {
    return(
    <View style={styles.container}>
        <Image source={arrowBack} style={styles.arrowBack}/>
        <Image source={iconeMetaVicio} style={styles.iconeMetaVicio}/>
        <Text style={styles.textVicio}>VÍCIO</Text>
        <Text style={styles.textQualSeuObjetivo}>Qual o seu tipo de vício?</Text>
        <Image source={vicioFormBackground} style={styles.formBackground}/>
        <Image source={arrowDropDown} style={styles.arrowDropDown}/>
        <Image source={prosseguirBackground} style={styles.prosseguirBackground} />
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
    iconeMetaVicio: {
        marginTop: 50,
        height:115,
        width:115,
        backgroundColor:"#B349E5",
    },
    textVicio: {
        marginTop: 28,
        fontWeight: 'bold',
        fontSize: 20
    },
    textQualSeuObjetivo: {
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 30

    },
    formBackground: {
        marginTop: 15,
        width: "65%",
        height: 42
    },
    arrowDropDown: {
        height: 38,
        width:30,
        left: 105,
        bottom: 40
    },
    prosseguirBackground: {
        marginTop: 40,
        height: 58,
        width: 310
    },

    textProsseguir: {
        fontSize: 23,
        bottom: 47,
        color: '#ffff'
    }




})
