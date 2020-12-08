import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '../../assets/assets/engrenagem.png';
import filtrar from '../../assets/assets/filtrar.png';
import target from '../../assets/assets/target.png';
import metaTarget from '../../assets/assets/metaTarget.png';
import concluidos from '../../assets/assets/concluidos.png';
import conquistas from '../../assets/assets/conquistas.png';

import styles from './style';

export default function MainScreen() {
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
                <Text style={styles.textMinhasMetas}>Minhas metas  </Text> 
                <Text style={styles.textMinhasMetas}>(0)</Text>
                {/* colocar um button */}
                <Image source={filtrar} style={styles.filtrar}/>
            </View>




            <View style={styles.mid}>
                <Text style={styles.textMetaCriada}>Nenhuma meta criada, por favor criar uma meta no Ícone abaixo</Text>
                <Image source={target} style={styles.target}/>
            </View>    
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <Image source={metaTarget} style ={styles.metaTarget}/>

                <View style={styles.viewConcluidos}>
                     <Image source={concluidos} style ={styles.concluidos}/>
                    <Text style ={styles.textConcluidos}>Concluídos</Text>
                </View>

                <View style={styles.viewConcluidos}>
                    <Image source={conquistas} style ={styles.conquistas}/>
                    <Text style ={styles.textConquistas}>Conquistas</Text>
                </View>

            </View>
        </View>
    </View>
    );
}