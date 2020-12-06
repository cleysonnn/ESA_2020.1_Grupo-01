import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import AntDesignIcon from 'react-native-vector-icons/AntDesign'


import styles from './style';
import style from '../criacao_meta_de_dieta/style';

export default function MetaDietaPersonalizada(){

    const [meta, setMeta] = React.useState({
        tipo: 'dieta',
        objetivo: 'blabla',
        pesoAtual: 0,
        pesoEstimado: 0,
        tarefas:[
            {
                id: 1,
                titulo: 'tarefa 1',
                concluida: false,
            },
            {
                id: 2,
                titulo: 'tarefa 2',
                concluida: false,
            },
            {
                id: 3,
                titulo: 'tarefa 3',
                concluida: false,
            },
        ]
      });

    const conquistas = [
        {
            id: 1,
            nome: '1 semana'
        },
        {
            id: 2,
            nome: '1 semana'
        },
        {
            id: 3,
            nome: '1 semana'
        },
        {
            id: 4,
            nome: '1 semana'
        },
    ];

    const storeData = async () => {
        try {
          const jsonValue = JSON.stringify(meta)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          console.warn(e);
        }
      }
    
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          setMeta(jsonValue != null ? JSON.parse(jsonValue) : null);
          console.log(meta);
        } catch(e) {
          console.warn(e);
        }
      }

      const TemplateItem = ({item, checkBoxStyle, iconColor, onPress}) => (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                width: 320,
                justifyContent: "space-between",
                marginBottom: 18,
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <TouchableOpacity
                    onPress={onPress}
                    style={checkBoxStyle}>
                        <AntDesignIcon name='check' size={25} color={iconColor}/>
                    </TouchableOpacity>

                    <Text>
                        {item.titulo}
                    </Text>

                </View>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={
                        require('../../assets/icones/radio/filled-trash_1trash-icon.png')} 
                        style={{
                            width: 25,
                            height: 25,
                        }}/>
                </TouchableOpacity>

                

            </View>
      );

      const renderItem = ({item}) => {
        var checkBoxStyle = item.concluida === true ? styles.tarefaConcluida : styles.tarefaNaoConcluida
        var iconColor = item.concluida ? '#fff' : '#000';

        return (
        <TemplateItem 
            item={item} 
            checkBoxStyle={checkBoxStyle} 
            iconColor={iconColor}
            onPress={()=>{
                item.concluida = !item.concluida
            }} />)
      }

      React.useState(()=>{
        storeData()
      },[])



    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topContainer}>

                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                   <AntDesignIcon name='left' size={30} color={'#000'}/>
      
                </TouchableOpacity>

            </View>

            <View style={styles.conteudo}>
                <View style={styles.iconContainer}>
                    <Image source={require('../../assets/images/meta_dieta/Mask_GroupIcone_dieta.png')} style={styles.iconSize}/>
        
                </View>
                
                <Text style={styles.header}>
                DIETA

                </Text>

                <Text style={styles.title}>
                PROGRESSO

                </Text>

                <View style={styles.metaInfoContainer}>

                    <View>
                        <Text style={styles.textObjetivo}>
                            blalbla
                        </Text>

                    </View>

                    

                    <View style={styles.conquistaInfoContainer}>
                        <Text style={styles.textObjetivo}>
                            {conquistas.length}

                        </Text>
                        <Image source={require('../../assets/icones/radio/bigwinnerscup_121959_5icone-trofeu.png')} style={styles.iconeTrofeu} />

                    </View>

                </View>

                <View style={styles.metaObjetivoInfoContainer}>
                    <Text>
                        Peso atual: {meta.pesoAtual}
                    </Text>

                    <Text>
                        Peso estimado: {meta.pesoEstimado}
                    </Text>
                </View>



                <View style={styles.progressBarContainer}>
                    <ProgressBar progress={0.5} color={'#6DFE6A'} style={styles.progressBarStyle}/>

                </View>

                <View style={styles.newValorInputContainer}>
                    <View style={styles.newValorInput}>
                        <TextInput placeholder={'Ex: 90.7'}
                        keyboardType={"numeric"}
                        style={styles.inputPlaceHolder}
                        onChange={input => {}}/>
                    
                    </View>

                </View>

                

                <View style={styles.buttomContainer}>
                    <View style={styles.buttomUpdateValorContainer}>
                        <TouchableOpacity style={styles.buttomUpdateValor}>
                            <Text style={styles.textButtom}>
                                Somar peso
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttomUpdateValor}>
                            <Text style={styles.textButtom}>
                                Subtrair peso
                            </Text>

                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.buttomUpdateValor}>
                        <Text style={styles.textButtom}>
                                    Encerrar meta
                        </Text>
                    </TouchableOpacity>

                </View>

                <FlatList
                data={meta.tarefas}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    marginBottom: 50,
                }}
                renderItem={renderItem}
                
                />

                <FlatList
                data={conquistas}
                horizontal
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.conquistaContainer}
                renderItem={({item})=>(
                    <View style={styles.conquista}>
                            <Image source={require('../../assets/icones/radio/Ativo_3aabb_6trofeu-dourado.png')} style={styles.trofeuDourado}/>
                            
                            <Text>
                                {item.nome}
                            </Text>
                    </View>
                )}
                
                />
                        

                </View>

                <TouchableOpacity style={styles.buttomCancelarMeta}>
                    <Text style={styles.textButtom}>
                        Cancelar Meta
                    </Text>

                </TouchableOpacity>

                
                

            </ScrollView>

            
    );


}