import {StyleSheet} from 'react-native';



export default StyleSheet.create ({
        container: {
            flex: 1,
            flexDirection: 'column', 
            alignItems: 'center'
        },
        arrowBack: {
            top: 30,
            right: 170
        },
        iconeMetaFinanceira: {
            marginTop: 50,
            height:115,
            width:115,
        },
        textFinanceira: {
            marginTop: 28,
            marginBottom: 50,
            fontWeight: 'bold',
            fontSize: 20
        },
        viewForms: {
            alignItems: 'center'
    
        },
        textQuantiaEstimada: {
            fontSize: 22,
            marginBottom: 25
        },
        textQuantiaAtual: {
            fontSize: 22,
            marginBottom: 25
        },
        financeiraFormBackground: {
            height:  40,
            width: 258,
            marginBottom: 15
        },
        prosseguirBackground: {
            marginTop: 40,
            height: 58,
            width: 310
        },
    
        textProsseguir: {
            fontSize: 23,
            marginLeft: 100,
            bottom: 47,
        }

})