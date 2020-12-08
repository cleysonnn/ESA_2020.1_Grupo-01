import {StyleSheet} from 'react-native';



export default StyleSheet.create ({
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