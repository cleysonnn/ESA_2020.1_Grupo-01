import React from 'react';
import { View,Text,Image,ScrollView,TouchableOpacity,SafeAreaView } from 'react-native';

import engrenagem from '../../assets/assets/engrenagem.png';
import filtrar from '../../assets/assets/filtrar.png';
import target from '../../assets/assets/target.png';
import metaTarget from '../../assets/assets/metaTarget.png';
import concluidos from '../../assets/assets/concluidos.png';
import conquistas from '../../assets/assets/conquistas.png';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

export default function MainScreen() {

    const navigation = useNavigation();

    function navigateToConcluidos(){
        navigation.navigate('Concluidos');

    }
    function navigateToConquistas(){
        navigation.navigate('Conquistas');

    }
    function navigateToEscolhaMeta() {
        navigation.navigate('EscolhaMeta');
    }
    return (
    <View style={styles.safearea}>
        
        
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
                <Text style={styles.textMinhasMetas}>Minhas metas  </Text> 
                <Text style={styles.textMinhasMetas}>(0)</Text>
                <TouchableOpacity>
                    <Image source={filtrar} style={styles.filtrar}/>
                </TouchableOpacity>
                
            </View>




            <View style={styles.mid}>
                <Text style={styles.textMetaCriada}>Nenhuma meta criada, por favor criar uma meta no Ícone abaixo</Text>
                <TouchableOpacity onPress={()=>{navigateToEscolhaMeta()}}>
                    <Image source={target} style={styles.target}/>
                </TouchableOpacity>
                
            </View>    
        </View>

        <View style={styles.container3}>

            <View style ={styles.bottom}>
                <Image source={metaTarget} style ={styles.metaTarget}/>

                <View style={styles.viewConcluidos}>
                    <TouchableOpacity onPress={()=>{navigateToConcluidos()}}>
                        <Image source={concluidos} style ={styles.concluidos}/>
                        <Text style ={styles.textConcluidos}>Concluídos</Text>
                    </TouchableOpacity>
                     
                </View>

                <View style={styles.viewConcluidos}>
                    <TouchableOpacity onPress={()=>{navigateToConquistas()}}>
                        <Image source={conquistas} style ={styles.conquistas}/>
                        <Text style ={styles.textConquistas}>Conquistas</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </View>
    
    );
}