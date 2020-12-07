import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import trofeu from '../assets/trofeu.png';
import logo from '../assets/logo.png';

export default function PopUpConquista() {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Conquista adquirida:</Text>
            <Image source={trofeu} style={styles.trofeu}/>
            <Text>Nome da conquista</Text>
            <Image source={logo} style={styles.logo}/>
        </View>

    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    trofeu: {
        marginTop: 15,
        height: 145,
        width: 120
    },
    logo: {
        height: 135,
        width: 135
    }

})