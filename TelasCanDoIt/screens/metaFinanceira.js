import React, {useState} from 'react';
import { CheckBox,View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../assets/arrowBack.png';
import iconeMetaFinanceira from '../assets/iconeMetaFinanceira.png';
import prosseguirBackground from '../assets/prosseguirBackground.png';

export default function MetaFinanceira() {
    const [isSelected, setSelection] = useState(false);

    return(
    <View style={styles.container}>
        <Image source={arrowBack} style={styles.arrowBack}/>
        <Image source={iconeMetaFinanceira} style={styles.iconeMetaFinanceira}/>
        <Text style={styles.textFinanceira}>FINANCEIRA</Text>
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

        <Image source={prosseguirBackground} style={styles.prosseguirBackground}/>
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
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 50
    },
    checkbox: {
    },
    textEconomizar: {
        fontSize: 22,
        marginRight: 50
    },
    textAcumular: {
        fontSize: 22
    },
    arrowBack: {
        top: 30,
        right: 170
    },
    iconeMetaFinanceira: {
        marginTop: 50,
        height:115,
        width:115,
    },
    textFinanceira: {
        marginTop: 28,
        fontWeight: 'bold',
        fontSize: 20
    },
    textQualSeuObjetivo: {
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 30

    },
    prosseguirBackground: {
        marginTop: 40,
        height: 58,
        width: 310
    },

    textProsseguir: {
        fontSize: 23,
        bottom: 47,
    }




})