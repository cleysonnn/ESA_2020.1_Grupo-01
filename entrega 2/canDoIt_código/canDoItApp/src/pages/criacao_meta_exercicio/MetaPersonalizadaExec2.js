import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import arrowBack from '../assets/assetsB/buttonBack.png';
import iconeMeta from '../assets/assetsB/metaExec.png';
import plus from '../assets/assetsB/plus.png';
import backgroundPlus from '../assets/assetsB/backGroundPlus.png';
import {useNavigation} from '@react-navigation/native';


export default function MetaPersonalizadaExec2() {

    const navigation = useNavigation();
    function navigateToNextStep(){
        navigation.navigate('MainScreenCardIII');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Image source={arrowBack} />
            </TouchableOpacity>
            <Image source={iconeMeta} style={styles.iconeMetaVicio} />
            <Text style={styles.textMeta}>EXERCÍCIO</Text>
            <Text style={styles.textQualSeuObjetivo}>Deseja selecionar algumas tarefas para ajudar em seu objetivo?</Text>
            <TouchableOpacity style={styles.buttonPlus}>
                <Image source={backgroundPlus} style={styles.backgroundPlus} />
                <Image source={plus} style={styles.plus} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigateToNextStep()}} style={styles.buttonProsseguir}>
                <Text style={styles.buttonTextProsseguir}>Prosseguir</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    arrowBack: {
        top: 30,
        right: 170
    },
    iconeMeta: {
        marginTop: 50,
        height: 115,
        width: 115,
        backgroundColor: "#fff",
    },
    textMeta: {
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
        marginTop: 15
    },
    backgroundPlus: {
        marginTop: 20
    },
    plus: {

        bottom: 24,
        left: 7
    },

    buttonProsseguir: {
        width: 320,
        height: 60,
        marginTop: 32,
        alignSelf: 'center',
        backgroundColor: '#CD853F',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonTextProsseguir: {

        fontWeight: 'bold',
        fontSize: 23,
        color: '#000000'
    },

    textEconomizar: {
        fontWeight: 'bold',
        fontSize: 23,
        color: '#000000'

    },
    buttonBack: {
        top: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },

})