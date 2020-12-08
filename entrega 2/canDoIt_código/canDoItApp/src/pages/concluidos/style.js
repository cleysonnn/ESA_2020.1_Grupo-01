import {StyleSheet} from 'react-native';



export default StyleSheet.create ({
    container: {
        flex: 1,
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

    textMetasConcluidas: {
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
        top: 141,
        alignItems: 'center'

    },

    textMetaConcluida: {
        top: 145,
        left: 53,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 27,
        color: '#838383',
        width: 300

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

    metaTargetUnselection: {
        height: 45,
        width: 45,
        left: 46,
        top: 22
    },

    textMetas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 17,
        left: 45

    },

    concluidos: {
        height: 38,
        width:38,
        left: 134.5,
        bottom: 42
    },

    selection: {
        top: 20,
        left: 102,
        height: 65,
        width: 102

    },

    textConcluidos: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffffff',
        bottom: 45,
        left: 109
    },

    viewColumn: {
        flexDirection: "column"
    },

    

    conquistas: {
        left: 160,
        top: 27
    },

    textConquistas: {
        fontWeight: 'bold',
        fontSize: 17,
        top: 27,
        left: 132

    }
})