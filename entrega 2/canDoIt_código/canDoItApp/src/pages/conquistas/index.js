import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '../assets/engrenagem.png';
import filtrar from '../assets/filtrar.png';
import metaTargetUnselection from '../assets/targetUnselection.png';
import concluidos from '../assets/concluidos.png';
import conquistas from '../assets/conquistasBranca.png';
import selection from '../assets/selection.png';
import styles from './style';

export default function Conquistas() {
    return (
    <View>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textInicial}>nome, Bem Vindo!</Text>
                <Image source={engrenagem} style={styles.engrenagem} />
            </View>
        </View>


           
        <View style={styles.container2}>
            <View style={styles.minhasMetas}>
                <Text style={styles.textMinhasConquistas}>Minhas Conquistas  </Text> 
                <Text style={styles.textMinhasConquistas}>(0)</Text>
                {/* colocar um button */}
                <Image source={filtrar} style={styles.filtrar}/>
            </View>




            <View style={styles.mid}>
                <Text style={styles.textConquistasAdquiridas}>Nenhuma conquista adquirida ainda</Text>
            </View>    
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <View style={styles.viewColumn}>
                    <Image source={metaTargetUnselection} style ={styles.metaTargetUnselection}/>
                    <Text style ={styles.textMetas}>Metas</Text>   
                </View>

                <View style={styles.viewConcluidos}>
                     <Image source={concluidos} style ={styles.concluidos}/>
                     <Text style ={styles.textConcluidos}>Concluídos</Text>
                </View>
                
                

                <View style={styles.viewColumn}>
                    <Image source={selection} style={styles.selection} />
                    <Image source={conquistas} style ={styles.conquistas}/>
                    <Text style ={styles.textConquistas}>Conquistas</Text>
                </View>

            </View>
        </View>
    </View>
    );
}