import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

import engrenagem from '../assets/engrenagem.png';
import filtrar from '../assets/filtrar.png';
import target from '../assets/target.png';
import metaTarget from '../assets/metaTarget.png';
import concluidos from '../assets/concluidos.png';
import conquistas from '../assets/conquistas.png';

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

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        //justifyContent: 'center',
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

    textMinhasMetas: {
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
        //backgroundColor:'#ff007f',
        height: 430,
        top: 141,
        alignItems: 'center'

    },

    textMetaCriada: {
        top: 120,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        color: '#838383',
        width: 250

    },

    target: {
        top: 150
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

    metaTarget: {
        top: 21.5,
        height: 75,
        width: 95,
        left: 28 
    },

    concluidos: {
        left: 99,
        top: 27
    },

    viewConcluidos: {
        flexDirection: "column"
    },

    textConcluidos: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 27,
        left: 72

    },

    conquistas: {
        left: 137,
        top: 27
    },

    textConquistas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 27,
        left: 108

    }
})