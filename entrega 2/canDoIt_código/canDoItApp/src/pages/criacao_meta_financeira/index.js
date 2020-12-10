import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import arrowBack from '../../assets/assetsB/buttonBack.png';
import iconeMeta from '../../assets/assetsB/MetaFinanceira.png';
import styles from './style';



export default function MetaFinanceira() {

    const unSelectedOptionIconSource = '../../assets/assetsB/unchecked.png';
    const selectedOptionIconSource = '../../assets/assetsB/selected.png';

    const [meta, setMeta] = React.useState({
        tipo: 'dieta',
        objetivo: null,
        pesoAtual: 0,
        pesoEstimado: 0,
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Image source={arrowBack} />
            </TouchableOpacity>
            <Image source={iconeMeta} style={styles.MetaFinanceira} />
            <Text style={styles.textMeta}>FINANCEIRA</Text>
            <Text style={styles.textQualSeuObjetivo}>Qual seu objetivo?</Text>
            <View style={styles.optionContainer}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                        if (meta.objetivo === 'Economizar') {
                            setMeta({
                                objetivo: null,

                            })


                            return;
                        }
                        setMeta({
                            objetivo: 'Economizar'
                        });
                    }}>
                    {meta.objetivo === 'Economizar' ?
                        <Image source={require(selectedOptionIconSource)} style={styles.optionMarkerSize} />
                        :
                        <Image source={require(unSelectedOptionIconSource)} style={styles.optionMarkerSize} />
                    }
                    <Text style={styles.textOption}> Economizar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                        if (meta.objetivo === 'Acumular') {
                            setMeta({
                                objetivo: null,

                            })
                            return;
                        }
                        setMeta({
                            objetivo: 'Acumular'
                        });
                    }}>
                    {meta.objetivo === 'Acumular' ?
                        <Image source={require(selectedOptionIconSource)} style={styles.optionMarkerSize} />
                        :
                        <Image source={require(unSelectedOptionIconSource)} style={styles.optionMarkerSize} />
                    }

                    <Text style={styles.textOption}> Acumular</Text>

                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonProsseguir}>
                <Text style={styles.buttonTextProsseguir}>Prosseguir</Text>
            </TouchableOpacity>
        </View >

    );
}