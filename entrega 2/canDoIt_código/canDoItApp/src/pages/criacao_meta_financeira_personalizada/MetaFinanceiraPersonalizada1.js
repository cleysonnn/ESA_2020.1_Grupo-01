import React, { useState } from 'react';
import { CheckBox, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import arrowBack from '../assets/assetsB/buttonBack.png';
import iconeMeta from '../assets/assetsB/MetaFinanceira.png';

export default function MetaFinanceiraPersonalizada1() {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Image source={arrowBack} />
            </TouchableOpacity>
            <Image source={iconeMeta} style={styles.MetaFinanceira} />
            <Text style={styles.textMeta}>FINANCEIRA</Text>
            <Text style={styles.textQualSeuObjetivo}>Qual seu objetivo?</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textEconomizar}>Economizar</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textAcumular}>Acumular</Text>
            </View>
            <TouchableOpacity style={styles.buttonProsseguir}>
                <Text style={styles.buttonTextProsseguir}>Prosseguir</Text>
            </TouchableOpacity>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 50
    },
    checkbox: {
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
    checkbox: {
    },
    textEconomizar: {
        fontSize: 22,
        marginRight: 50,
        color: '#000000'
    },
    textAcumular: {
        fontSize: 22,
        color: '#000000'
    },

    textQualSeuObjetivo: {
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 30

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

    buttonBack: {
        top: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },


})