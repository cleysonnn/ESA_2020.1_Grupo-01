import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';

import engrenagem from '../../assets/assets/engrenagem.png';
import filtrar from '../../assets/assets/filtrar.png';
import metaTargetUnselection from '../../assets/assets/targetUnselection.png';
import concluidos from '../../assets/assets/concluidosBranco.png';
import conquistas from '../../assets/assets/conquistas.png';
import selection from '../../assets/assets/selection.png';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

export default function Concluidos() {

    const navigation = useNavigation();

    function navigateToHome(){
        navigation.navigate('MainScreen');

    }
    function navigateToConquistas(){
        navigation.navigate('Conquistas');

    }

    return (
    <View>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textInicial}>nome, Bem Vindo!</Text>
                <TouchableOpacity>
                    <Image source={engrenagem} style={styles.engrenagem} />
                </TouchableOpacity>
            </View>
        </View>


           
        <View style={styles.container2}>
            <View style={styles.minhasMetas}>
                <Text style={styles.textMetasConcluidas}>Metas Concluídas  </Text> 
                <Text style={styles.textMetasConcluidas}>(0)</Text>
                <TouchableOpacity>
                    <Image source={filtrar} style={styles.filtrar}/>
                </TouchableOpacity>
            </View>




            <View style={styles.mid}>
                <Text style={styles.textMetaConcluida}>Nenhuma meta concluída ainda</Text>
            </View>    
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <View style={styles.viewColumn}>
                    <TouchableOpacity  style={styles.buttomMeta} onPress={()=>{navigateToHome()}}>
                        <Image source={metaTargetUnselection} style ={styles.metaTargetUnselection}/>
                        <Text style ={styles.textMetas}>Metas</Text> 
                    </TouchableOpacity>
                </View>


                <View style={styles.viewColumn}>
                    <TouchableOpacity style={styles.buttomConcluido}>
                        <Image source={selection} style ={styles.selection}/>
                        <Image source={concluidos} style ={styles.concluidos}/>
                        <Text style= {styles.textConcluidos}>Concluidos</Text>
                    </TouchableOpacity>
                </View>
                
        
                <View style={styles.viewColumn}>
                    <TouchableOpacity style ={styles.conquistas} onPress={()=>{navigateToConquistas()}}>
                        <Image source={conquistas}/>
                        <Text style ={styles.textConquistas}>Conquistas</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </View>
    );
}