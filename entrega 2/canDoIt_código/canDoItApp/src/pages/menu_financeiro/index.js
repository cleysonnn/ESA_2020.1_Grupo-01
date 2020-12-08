import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '.../../assets/assets/engrenagem.png';
import arrowBack from '../../assets/assets/arrowBackBlack.png';
import iconeMetaFinanceira from '../../assets/assets/iconeMetaFinanceira.png';
import conquistasIcon from '../../assets/assets/conquistas.png';
import statusbar from '../../assets/assets/statusbar.png';
import formBackground from '../../assets/assets/formBackground.png';
import buttonBackground from '../../assets/assets/buttonBackground.png';
import trofeu from '../../assets/assets/trofeu.png';
import backgroundButtonCancelar from '../../assets/assets/backgroundButtonCancelar.png';
import styles from './style';

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