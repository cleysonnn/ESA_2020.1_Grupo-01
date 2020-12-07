import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import arrowBack from '../assets/arrowBack.png';
import iconeVicio from '../assets/iconeVicio.png';
import backgroundVicio from '../assets/backgroundVicio.png';
import iconeDieta from '../assets/iconeDieta.png';
import iconeFinanceiro from '../assets/iconeFinanceiro.png';
import iconeExercicios from '../assets/iconeExercicios.png';
import backgroundExercicios from '../assets/backgroundExercicios.png';



export default function EscolhaMeta() {
    return (
        <View style={styles.container}>
            <Image source={arrowBack} style={styles.arrowBack}/>
           
            <View style={styles.header}>
                <Text style={styles.textHeader}>Selecione a sua Meta</Text>
            </View>

            <View style={styles.viewVicio}>
                <Image source={backgroundVicio} style={styles.backgroundVicio}/>   
                <Image source={iconeVicio} style={styles.iconeVicio}/>
                <Text style={styles.textVicio}>Meta de Vicio</Text>
                
            </View>

            <View style={styles.viewDieta}>
                <Image source={iconeDieta} style={styles.iconeDieta} />
                <Text style={styles.textDieta}>Meta para Dieta</Text>
            </View>
             

            <View style={styles.viewFinanceiro}>
                <Image source={iconeFinanceiro} style={styles.iconeFinanceiro}/>
                <Text style={styles.textFinanceiro}>Meta Financeira</Text>
                
            </View>

             <View style={styles.viewExercicios}>
                 <Image source={backgroundExercicios} style={styles.backgroundExercicios}/>
                 <Image source={iconeExercicios} style={styles.iconeExercicios}/>
                 <Text style={styles.textExercicios}>Meta de Exercício</Text>
                
            </View>


             <View>
                
            </View>
                 
             
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        //alignItems: 'center'
    },

    arrowBack: {
        top: 50,
        left: 20
    },

    header: {
        alignItems: 'center',

    },

    textHeader: {
        top: 72,
        fontSize: 28,
        color: '#A70069'
    },

    viewVicio: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 395,
        height: 115,
        marginTop: 110,
        backgroundColor: '#DDC0FA',
        marginBottom: 20
    },
    textVicio: {
        fontSize: 19,
        width: 120,
        top: 12,
        right: 80,
        color: '#696969'
    },

    iconeVicio: {
        top: 25,
        right: 126,
        

    },

    backgroundVicio: {
        top: 2.5,
        right: 35,
        height: 110,
        width: 112
    },

    viewDieta: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 395,
        height: 115,
        backgroundColor: '#FCB3B3',
        marginBottom: 20
    },
    textDieta: {
        fontSize: 19,
        width: 136,
        top: 12,
        right: 40,
        color: '#696969'
    },

    iconeDieta: {
        height: 112,
        width: 112,
        top: 1.5,
        right: 57,
        

    },

    viewFinanceiro: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 395,
        height: 115,
        backgroundColor: '#F8EFB6',
        marginBottom: 20
    },
    textFinanceiro: {
        fontSize: 19,
        width: 137,
        top: 12,
        right: 40,
        color: '#696969'
    },

    iconeFinanceiro: {
        height: 112,
        width: 112,
        top: 1.5,
        right: 57,
        

    },

    viewExercicios: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 395,
        height: 115,
        backgroundColor: '#FED7B2',
        marginBottom: 20
    },
    textExercicios: {
        fontSize: 19,
        width: 168,
        top: 12,
        right: 63,
        color: '#696969'
    },

    backgroundExercicios: {
        top: 2.5,
        left:0,
        height: 110,
        width: 112
    },


    iconeExercicios: {
        height: 80,
        width: 80,
        top: 17,
        right: 96,
        

    },

    




    

   

})