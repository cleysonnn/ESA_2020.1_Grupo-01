import React from 'react';
import {View} from 'react-native';

export default function MetaDietaPersonalizada(){
    
    var dados_meta = {
        peso_estimado: 0,
        peso_atual: 0,
        tarefas: [{}],
        tipo: 'dieta',
    };

    /**
     * 
     * @param {*} valor_peso 
     * Usuário ganhou peso e incrementa o valor do peso atual
     */
    function incrementarPesoAtual(valor_peso){
        if(valor_peso<=0){
            return;
        
        }
        if(dados_meta.peso_atual>=dados_meta.peso_estimado){
            return;
        
        }
        dados_meta.peso_atual = dados_meta.peso_atual + valor_peso;
    
    };
    /**
     * 
     * @param {*} valor_peso 
     * Usuário perdeu peso e decrementa o valor do peso atual
     */
    function decrementarPesoAtual(valor_peso){
        if(valor_peso<=0){
            return;
        
        }
        if(dados_meta.peso_atual<=dados_meta.peso_estimado){
            return;
        
        }
        dados_meta.peso_atual = dados_meta.peso_atual + valor_peso;

    }
    function addTarefa(tarefa){
        if(tarefa===null){
            return;
        
        }
        if(tarefa.descricao===null){
            return;
        
        }
        dados_meta.tarefas.push(tarefa);
    
    }
    function rmvTarefa(tarefa){
        if(tarefa===null){
            return;
        
        }
        if(tarefa.descricao===null){
            return;
        
        }
        dados_meta.tarefas.pop(tarefa);
    }

    return(
        <View>
        </View>
    );


}