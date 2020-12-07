import React, {useState} from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../assets/arrowBack.png';
import iconeMetaVicio from '../assets/iconeVicio.png';
import vicioFormBackground from'../assets/vicioFormBackground.png';
import arrowDropDown from '../assets/arrowDropDown.png';
import prosseguirBackground from '../assets/backgroundProsseguirVicio.png';
import iconPlus from '../assets/plusIcon.png';
import backgroundIcon from '../assets/backgroundPlus.png';
export default function MetaVicioPersonalizada2() {
    return(
    <View style={styles.container}>
        <Image source={arrowBack} style={styles.arrowBack}/>
        <Image source={iconeMetaVicio} style={styles.iconeMetaVicio}/>
        <Text style={styles.textVicio}>VÍCIO</Text>
        <Text style={styles.textQualSeuObjetivo}>Deseja selecionar algumas tarefas para ajudar em seu objetivo?</Text>
        <Image source={backgroundIcon} style={styles.backgroundIcon}/>
        <Image source={iconPlus} style={styles.iconPlus}/>
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
        width: "70%",
        fontSize: 19,
        marginTop: 30,
        textAlign: 'center'

    },
    backgroundIcon: {
        marginTop: 15,
    },
    iconPlus: {
        bottom: 24
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
