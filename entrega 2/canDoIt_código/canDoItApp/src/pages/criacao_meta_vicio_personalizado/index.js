import React, {useState} from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeMetaVicio from '../../assets/assets/iconeVicio.png';
import vicioFormBackground from'../../assets/assets/vicioFormBackground.png';
import arrowDropDown from '../../assets/assets/arrowDropDown.png';
import prosseguirBackground from '../../assets/assets/backgroundProsseguirVicio.png';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function MetaVicioPersonalizada() {
    const navigation = useNavigation();

    function navigateToNextStep(){
        navigation.navigate('CriacaoMetaVicioII');

    }
    return(
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={arrowBack} style={styles.arrowBack}/>
        </TouchableOpacity>
        
        <Image source={iconeMetaVicio} style={styles.iconeMetaVicio}/>
        <Text style={styles.textVicio}>VÍCIO</Text>
        <Text style={styles.textQualSeuObjetivo}>Qual o seu tipo de vício?</Text>
        <Image source={vicioFormBackground} style={styles.formBackground}/>
        <Image source={arrowDropDown} style={styles.arrowDropDown}/>

        <TouchableOpacity onPress={()=>{navigateToNextStep()}}>
            <Image source={prosseguirBackground} style={styles.prosseguirBackground} />
            <Text style={styles.textProsseguir}>Prosseguir</Text>
        </TouchableOpacity>
        
    </View>

    );
}
