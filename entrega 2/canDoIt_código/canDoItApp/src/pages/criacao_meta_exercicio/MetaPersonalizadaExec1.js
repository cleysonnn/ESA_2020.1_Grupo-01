import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, CheckBox, TouchableOpacity, TextInput } from 'react-native';

import arrowBack from '../assets/assetsB/buttonBack.png';
import iconeMeta from '../assets/assetsB/metaExec.png';
import prosseguirBackground from '../assets/assetsB/backgroundProsseguirExec.png';
import backGroundPlus from '../assets/assetsB/backGroundPlus.png';
import plus from '../assets/assetsB/plus.png';
import {useNavigation} from '@react-navigation/native';


export default function MetaFinanceiraPersonalizada1() {
    const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();
    function navigateToNextStep(){
        navigation.navigate('CriacaoMetaExercicioII');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Image source={arrowBack} />
            </TouchableOpacity>
            <Image source={iconeMeta} style={styles.iconeMetaVicio} />
            <Text style={styles.textMeta}>EXERCÍCIO</Text>
            <Text style={styles.textQualSeuObjetivo}>Qual sera sua nova rotina de exercício?</Text>
            <View style={styles.container1}>

                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textCheckBox}>D</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textCheckBox}>S</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textCheckBox}>T</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textCheckBox}>Q</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />

                <Text style={styles.textCheckBox}>Q</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />

                <Text style={styles.textCheckBox}>S</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textCheckBox}>S</Text>

            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <TextInput placeholder='Hora' style={styles.InputTime} />
                    <Text style={styles.Dots}>:</Text>
                    <TextInput placeholder='Min' style={styles.InputTime} />
                </View>
                <TextInput placeholder='digite o exercício...' style={styles.Input} />
                <TouchableOpacity style={styles.buttonPlus}>
                    <Image source={backGroundPlus} style={styles.backgroundPlus} />
                    <Image source={plus} style={styles.plus} />
                </TouchableOpacity>
            </View>
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
    container1: {
        flexDirection: 'row',
        marginTop: 50
    },
    container2: {
        flexDirection: 'row'
    },
    container3: {
        flexDirection: 'row',
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
        marginTop: 15,
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

    textCheckBox: {

        fontSize: 23,
        color: '#000000',
        paddingEnd: 5

    },

    Rectangle: {
        marginTop: 15,
        width: "40%",
        height: 30
    },
    backArrow: {
        marginTop: 15,
        height: 15,
        width: 15,
        right: 25,
        top: 2
    },
    buttonBack: {
        top: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },

    Input: {
        alignSelf: 'center',
        height: 40,
        width: 220,
        borderWidth: 3,
        borderColor: '#CD853F',
        borderRadius: 12,



    },
    backgroundPlus: {
        marginTop: 20,
        marginStart: 6
    },
    plus: {
        marginStart: 6,
        bottom: 24,
        left: 7
    },

    InputTime: {

        alignSelf: 'center',
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: '#CD853F',
        borderRadius: 12,
        marginEnd: 5
    },
    Dots: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000',
        right: 2

    }
})