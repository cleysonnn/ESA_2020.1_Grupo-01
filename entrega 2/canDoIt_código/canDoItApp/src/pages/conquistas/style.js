import {StyleSheet} from 'react-native';




export default StyleSheet.create ({
        container: {
            flex: 1,
            alignItems: 'center',

        },
    
        header: {
            height: 136,
            width: 414,
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
            top: 130,
            width: 400,
            height: 80,
            flexDirection: "row",
    
        },
    
        textInicial: {
            color: '#ffffffff',
            fontSize: 25,
            fontWeight: 'bold',
            marginRight: 148,
            top: 40
            
        },
    
        textMinhasConquistas: {
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
            top: 80,
            alignItems: 'center'
    
        },
    
        textConquistasAdquiridas: {
            top: 175,
            right: 3,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center',
            fontSize: 27,
            color: '#838383',
            width: 250
    
        },
    
        bottom: {
            backgroundColor: '#EDEDED',
            height: 100,
            width: 414,
            top: 50,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            flexDirection: "row"
        },
    
        metaTargetUnselection: {
            height: 45,
            width: 45,
        },
    
        textMetas: {
            fontWeight: 'bold',
            fontSize: 17,
    
        },
        buttomMeta: {
            left: 60,
            top: 20
        },
    
        concluidos: {
            height: 38,
            width:38,
        },
        buttomConcluido: {
            left: 122,
            alignItems: 'center',
            top: 27,
        },
    
        textConcluidos: {
            fontSize: 17,
            fontWeight: 'bold',
            color:'#000',
        },
    
        viewColumn: {
            flexDirection: "column"
        },
        buttonConquistas:{
            left: 160,
            width:102,
            height:65,
            alignItems: 'center',
            justifyContent:'center',
            top: 50,
        },
    
        selection: {
            height: 65,
            width: 102
    
        },
    
        conquistas: {
            bottom:55
        },
    
        textConquistas: {
            fontWeight: 'bold',
            color: '#ffff',
            fontSize: 17,
            bottom: 53
    
        }
})