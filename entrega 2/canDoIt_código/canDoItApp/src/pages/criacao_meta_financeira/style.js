import {StyleSheet} from 'react-native';




export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    optionContainer: {
        width: 330,
        justifyContent: "space-between",
        marginBottom: 29,
        flexDirection: "row",

    },
    arrowBack: {
        top: 30,
        right: 170
    },
    iconeMeta: {
        marginTop: 50,
        height: 115,
        width: 115,
        backgroundColor: "#fff",
    },
    textMeta: {
        color: '#000',
        fontWeight: '400',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 53,

    },
    option: {
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    textOption: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',

    },
    textAcumular: {
        fontSize: 22,
        color: '#000000'
    },

    textQualSeuObjetivo: {
        width: '100%',
        textAlign: "center",
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 27,

    },


    buttonProsseguir: {
        width: 254,
        height: 48,
        borderRadius: 20,
        backgroundColor: '#FFE32E',
        justifyContent: "center",
        alignItems: "center",
    },

    buttonTextProsseguir: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000'
    },

    buttonBack: {
        top: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },


})