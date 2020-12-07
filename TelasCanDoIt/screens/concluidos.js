import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '../assets/engrenagem.png';
import filtrar from '../assets/filtrar.png';
import metaTargetUnselection from '../assets/targetUnselection.png';
import concluidos from '../assets/concluidosBranco.png';
import conquistas from '../assets/conquistas.png';
import selection from '../assets/selection.png';

export default function Concluidos() {
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
                <Text style={styles.textMetasConcluidas}>Metas Concluídas  </Text> 
                <Text style={styles.textMetasConcluidas}>(0)</Text>
                {/* colocar um button */}
                <Image source={filtrar} style={styles.filtrar}/>
            </View>




            <View style={styles.mid}>
                <Text style={styles.textMetaConcluida}>Nenhuma meta concluída ainda</Text>
            </View>    
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <View style={styles.viewColumn}>
                    <Image source={metaTargetUnselection} style ={styles.metaTargetUnselection}/>
                    <Text style ={styles.textMetas}>Metas</Text>   
                </View>

                <View style={styles.viewColumn}>
                    <Image source={selection} style ={styles.selection}/>
                    <Image source={concluidos} style ={styles.concluidos}/>
                    <Text style= {styles.textConcluidos}>Concluidos</Text>
                </View>
                
                

                <View style={styles.viewColumn}>
                    <Image source={conquistas} style ={styles.conquistas}/>
                    <Text style ={styles.textConquistas}>Conquistas</Text>
                </View>

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

    container2: {
        flex: 2,
        alignItems: 'center'
    },

    container3: {
        flex: 3,
        flexDirection: "row"
    },

    header: {
        top: 25,
        height: 136,
        width: 400,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        backgroundColor: '#A70069',
        justifyContent: 'center',
        alignItems: 'center'
    },

    engrenagem: {
        width: 40,
        height: 40,
        left: 158,
        bottom: 50
    },

    minhasMetas: {
        top: 163,
        width: 400,
        height: 80,
        flexDirection: "row",
        backgroundColor: '#ffff'

    },

    textInicial: {
        color: '#ffffffff',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 148,
        top: 40
        
    },

    textMetasConcluidas: {
        fontWeight:'bold',
        fontSize: 17,
        left: 20,
        top: 30


    },
    filtrar: {
        top: 26,
        left: 45
    },
    
    mid: {
        overflow:"visible",
        flexDirection:'column',
        alignItems: 'center',
        height: 430,
        top: 141,
        alignItems: 'center'

    },

    textMetaConcluida: {
        top: 145,
        left: 53,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 27,
        color: '#838383',
        width: 300

    },

    bottom: {
        backgroundColor: '#EDEDED',
        height: 100,
        width: 400,
        top: 658,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        flexDirection: "row"
    },

    metaTargetUnselection: {
        height: 45,
        width: 45,
        left: 46,
        top: 22
    },

    textMetas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 17,
        left: 45

    },

    concluidos: {
        height: 38,
        width:38,
        left: 134.5,
        bottom: 42
    },

    selection: {
        top: 20,
        left: 102,
        height: 65,
        width: 102

    },

    textConcluidos: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffffff',
        bottom: 45,
        left: 109
    },

    viewColumn: {
        flexDirection: "column"
    },

    

    conquistas: {
        left: 160,
        top: 27
    },

    textConquistas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 27,
        left: 132

    }
})