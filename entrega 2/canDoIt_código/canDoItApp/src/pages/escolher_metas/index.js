import React from 'react';
import { View,Text,Image,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';

import arrowBack from '../../assets/assets/arrowBack.png';
import iconeVicio from '../../assets/assets/iconeVicio.png';
import backgroundVicio from '../../assets/assets/backgroundVicio.png';
import iconeDieta from '../../assets/assets/iconeDieta.png';
import iconeFinanceiro from '../../assets/assets/iconeFinanceiro.png';
import iconeExercicios from '../../assets/assets/iconeExercicios.png';
import backgroundExercicios from '../../assets/assets/backgroundExercicios.png';

import styles from './style';

export default function EscolhaMeta() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                
                <TouchableOpacity>
                    <Image source={arrowBack} style={styles.arrowBack}/>
                </TouchableOpacity>
                
                
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Selecione a sua Meta</Text>
                </View>

                <View style={styles.viewPrincipal}>
               
                
                    <TouchableOpacity>
                        <View style={styles.viewVicio}>
                            <Image source={backgroundVicio} style={styles.backgroundVicio}/>   
                            <Image source={iconeVicio} style={styles.iconeVicio}/>
                            <Text style={styles.textVicio}>Meta de Vicio</Text>
                        </View>
                    </TouchableOpacity>
                

                
                    <TouchableOpacity>
                        <View style={styles.viewDieta}>
                            <Image source={iconeDieta} style={styles.iconeDieta} />
                            <Text style={styles.textDieta}>Meta para Dieta</Text>
                        </View>     
                    </TouchableOpacity>
                
                    
                
                    <TouchableOpacity>
                        <View style={styles.viewFinanceiro}>
                            <Image source={iconeFinanceiro} style={styles.iconeFinanceiro}/>
                            <Text style={styles.textFinanceiro}>Meta Financeira</Text>
                        </View>
                    </TouchableOpacity>
                
                    <TouchableOpacity>
                        <View style={styles.viewExercicios}>
                            <Image source={backgroundExercicios} style={styles.backgroundExercicios}/>
                            <Image source={iconeExercicios} style={styles.iconeExercicios}/>
                            <Text style={styles.textExercicios}>Meta de Exercício</Text>
                        
                        </View>

                    </TouchableOpacity>
                    <View>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
    }