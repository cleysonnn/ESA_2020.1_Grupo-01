
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import arrowBack from '../assets/assetsB/buttonBack.png';
import iconeMetaFinanceira from '../assets/assetsB/MetaFinanceira.png';
import prosseguirBackground from '../assets/assetsB/backgroundProsseguirFinanceira.png';

export default function MetaFinanceiraPersonalizada2() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Image source={arrowBack} />
            </TouchableOpacity>
            <Image source={iconeMeta} style={styles.MetaFinanceira} />
            <Text style={styles.textMeta}>FINANCEIRA</Text>

            <View style={styles.viewForms}>
                <Text style={styles.textQuantiaEstimada}>Qual a quantia estimada?</Text>
                <TextInput placeholder = 'digite o valor...' style={styles.Input}/>
                <Text style={styles.textQuantiaAtual}>Qual a quantia atual?</Text>
                <TextInput placeholder = 'digite o valor...' style={styles.Input}/>
            </View>
            <TouchableOpacity style={styles.buttonProsseguir}>
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

    iconeMeta: {
        marginTop: 50,
        height: 115,
        width: 115,
    },

    textMeta: {
        marginTop: 28,
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
        marginTop: 20,
        marginBottom: 20
    },
    financeiraFormBackground: {
        height: 40,
        width: 258,
        marginBottom: 40
    },
    buttonProsseguir: {
        marginTop: 40,
        height: 58,
        width: 310,
        alignItems: 'center',
        alignSelf: 'center'
    },

    buttonProsseguir: {
        width: 320,
        height: 60,
        marginTop: 32,
        alignSelf: 'center',
        backgroundColor: '#FFE32E',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonTextProsseguir: {

        fontWeight: 'bold',
        fontSize: 23,
        color: '#000000'
    },

    Input: {

        height: 40,
        width: 260,
        borderWidth: 3,
        borderColor: '#FFE32E',
        borderRadius: 12,



}

})
