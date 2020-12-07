import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '../assets/engrenagem.png';
import arrowBack from '../assets/arrowBackBlack.png';
import iconeMetaFinanceira from '../assets/iconeMetaFinanceira.png';
import conquistasIcon from '../assets/conquistas.png';
import statusbar from '../assets/statusbar.png';
import formBackground from '../assets/formBackground.png';
import buttonBackground from '../assets/buttonBackground.png';
import trofeu from '../assets/trofeu.png';
import backgroundButtonCancelar from '../assets/backgroundButtonCancelar.png';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={arrowBack} style={styles.arrowBack}/>
                <Image source={engrenagem} style={styles.engrenagem} />
            </View>

            <View style={styles.viewInicial}>
                <Image source={iconeMetaFinanceira}/>
                <Text style={styles.textFinanceira}>FINANCEIRA</Text>
                <Text style={styles.textProgresso}>PROGRESSO</Text>
            </View>

            <View style={styles.viewMid}>
                <View style={styles.viewMidLeft}>
                    <Text style={styles.textMidLeft}>Economizar</Text>
                    <Text style={styles.textMidLeft}>Quantia Atual</Text>
                    
                </View>

                <View style={styles.viewMidRight}>
                    <Text style={styles.numConquistas}>0</Text>
                    <Image source={conquistasIcon} style={styles.conquistasIcon}/>
                </View>
                <View style={styles.viewMidRightBottom}> 
                    <Text style={styles.textMidRight}>Objetivo</Text>
                </View>
            </View>
            <Image source={statusbar} style={styles.statusbar}/>
            <View>
                <View style={styles.viewForms}>
                    <Image source={formBackground} style={styles.formBackground}/>
                    <Image source={formBackground} style={styles.formBackground}/>
                </View>

                <View style={styles.viewForms}>
                    
                    <Image source={buttonBackground} style={styles.buttonBackground}/>
                    
                    <Image source={buttonBackground} style={styles.buttonBackground}/>
                    
                </View>
            </View>
            <Text style={styles.buttonLabelAdd}>Adcionar valor</Text>
            <Text style={styles.buttonLabelRem}>Subtrair valor</Text>
            <Image source={buttonBackground} style={styles.buttonBackgroundEncerrar}/>
            <Text style={styles.labelEncerrar}>Encerrar Meta</Text>

            <View style={styles.viewConquistas}>
                <View style={styles.viewTrofeus}>
                    <Image source={trofeu} style={styles.trofeu}/>
                    <Image source={trofeu} style={styles.trofeu}/>
                    <Image source={trofeu} style={styles.trofeu}/>
                </View>
                <View style={styles.viewTextTrofeus}>
                    <Text style={styles.textTrofeus10}>10%</Text>
                    <Text style={styles.textTrofeus25}>25%</Text>
                    <Text style={styles.textTrofeus50}>50%</Text>
                </View>
            <View style={styles.viewCancelar}>
                <Image source={backgroundButtonCancelar} style={styles.backgroundButtonCancelar}/>
                <Text style={styles.textBackgroundCancelar}>Cancelar Meta</Text>
            </View>
            
            </View>
        
        </View>

    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center'
    }, 

    header: {
        top: 25,
        height: 80,
        width: 400,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        backgroundColor: '#A70069',
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowBack: {
        top: 20,
        right: 165
        
    },

    engrenagem: {
        width: 40,
        height: 40,
        left: 158,
        bottom: 15
    },

    viewInicial: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'column'
    },
    textFinanceira: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10
    },
    textProgresso: {
        fontWeight: 'bold',
        fontSize: 25
    },
    viewMid: {
        marginTop: 18,
        width: '100%',
        flexDirection: 'row'
    },
    viewMidLeft: {
        width: '50%',
    },
    textMidLeft: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 30,
        marginLeft: 30

    },
    viewMidRight: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    numConquistas: {
        fontWeight: 'bold',
        fontSize: 19,
        top: 10,
        marginLeft: 80

    },
    conquistasIcon: {
        marginLeft: 15,
        height: 50,
        width: 50,
    },
    viewMidRightBottom: {
        width: 100,
        height: 50,
        right: '83.5%',
        top: '12.5%'
    },
    textMidRight: {
        fontWeight: 'bold',
        fontSize: 19,
        top: 10
    },
    statusbar: {
        width: '85%'
    },
    viewForms: {
        flexDirection: 'row',

    },

    formBackground: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        width: '46%',
        //width: 174,
        height: 28.9,

    },

    buttonBackground: {
        marginLeft: 10,
        width: '46%',
       //width: 174,
        marginBottom: 7,

    },
    buttonLabelAdd: {
        right: 94,
        fontSize: 20,
        bottom: 37

    },
    buttonLabelRem: {
        left: 94,
        fontSize: 20,
        bottom: 65
    },
    buttonBackgroundEncerrar: {
        width: '46%',
        bottom: 50,
    },
    labelEncerrar: {
        fontSize: 20,
        bottom: 79
    },
    viewConquistas: {
        bottom: 65,
        flexDirection: 'column',
        width: '100%',
        height: '15%',
    },
    viewTrofeus: {
        flexDirection: 'row',
        justifyContent:'center',
        height: '80%',
        width: '100%',
    },
    trofeu: {
        height: '100%',
        width: '20%',
        marginRight: '22%',
        left: '80%'
    },
    viewTextTrofeus: {
        flexDirection: 'row',
        height: '20%',
        width:'100%'
    },
    textTrofeus10: {
        fontSize: 19,
        marginLeft: '12%'
    },
    textTrofeus25: {
        fontSize: 19,
        marginLeft: '33.2%'
    },
    textTrofeus50: {
        fontSize: 19,
        marginLeft: '33.2%'
    },
    viewCancelar: {
        alignItems: 'center',
        marginTop: 21
    },
    backgroundButtonCancelar: {

    },
    textBackgroundCancelar: {
        fontSize: 19,
        bottom: 29
    }
    





});
