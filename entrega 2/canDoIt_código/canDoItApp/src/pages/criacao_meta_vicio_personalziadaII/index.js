import React, {useState} from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeMetaVicio from '../../assets/assets/iconeVicio.png';
import vicioFormBackground from'../../assets/assets/vicioFormBackground.png';
import arrowDropDown from '../../assets/assets/arrowDropDown.png';
import prosseguirBackground from '../../assets/assets/backgroundProsseguirVicio.png';
import iconPlus from '../../assets/assets/plusIcon.png';
import backgroundIcon from '../../assets/assets/backgroundPlus.png';
import styles from './style';

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
