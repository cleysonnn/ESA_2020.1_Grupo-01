import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import setaConfirma from '../assets/setaConfirma.png';
import logo from '../assets/logo.png';

export default function PopUpMetaCriada() {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Meta criada com sucesso</Text>
            <Image source={setaConfirma} style={styles.setaConfirma}/>
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
    setaConfirma: {
        marginTop: 12,
        height: 120,
        width: 120
    },
    logo: {
        bottom: 10,
        height: 135,
        width: 135
    }

})