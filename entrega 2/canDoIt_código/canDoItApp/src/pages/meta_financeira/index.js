import React from 'react';
import {View} from 'react-native';

export default function MetaDietaFinanceira(){
    var dados_meta = {
        valor_estimado: 0,
        valor_atual: 0,
        tipo: 'financeira',
    };

    /**
     * 
     * @param {*} valor 
     * Usuário ganhou peso e incrementa o valor do peso atual
     */
    function incrementarValorAtual(valor){
        if(valor<=0){
            return;
        
        }
        if(dados_meta.valor_atual>=dados_meta.valor_estimado){
            return;
        
        }
        dados_meta.valor_atual = dados_meta.valor_atual + valor;
    
    };
    /**
     * 
     * @param {*} valor 
     * Usuário perdeu peso e decrementa o valor do peso atual
     */
    function decrementarPesoAtual(valor){
        if(valor<=0){
            return;
        
        }
        if(dados_meta.valor_atual<=dados_meta.valor_estimado){
            return;
        
        }
        dados_meta.valor_atual = dados_meta.valor_atual - valor;

    }

    return(
        <View>
        </View>
    );


}