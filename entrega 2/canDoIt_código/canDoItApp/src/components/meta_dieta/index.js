import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

export default function MetaDieta({peso}){
    
    const [dados_meta, setDados] = React.useState({
        peso_atual: peso,
        tipo: 'dieta',
    });

    /**
     * 
     * @param {*} valor_peso 
     * Usuário ganhou peso e incrementa o valor do peso atual
     */
    function incrementarPesoAtual(valor_peso){
        dados_meta.peso_atual = dados_meta.peso_atual + valor_peso;
    
    };
    /**
     * 
     * @param {*} valor_peso 
     * Usuário perdeu peso e decrementa o valor do peso atual
     */
    function decrementarPesoAtual(valor_peso){
        peso_atual = peso_atual - valor_peso;

    }

    return(
        <View>
        </View>
    );


}