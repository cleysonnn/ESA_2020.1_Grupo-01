import {StyleSheet} from 'react-native';




export default StyleSheet.create ({
    safearea:{
        flex:1,
        
        alignItems: 'center'
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
        bottom: 8,
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
        bottom: 50,
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
        top: 50
    },

    bottom: {
        backgroundColor: '#EDEDED',
        height: 100,
        width: 400,
        bottom: 80,
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
    concluidosButton: {

    },

    viewConcluidos: {
        flexDirection: "column"
    },

    textConcluidos: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 0,
        right: 25

    },

    conquistas: {
        left: 65,
        top: 15
    },

    textConquistas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 12,
        left: 40

    },
    card: {
        width: 380,
        height: 100
    },
    plus: {
        marginTop: 215,
        left: 140
    }
})