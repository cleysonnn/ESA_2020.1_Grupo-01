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
        iconeMetaVicio: {
            marginTop: 50,
            height:115,
            width:115,
            backgroundColor:"#B349E5",
        },
        textVicio: {
            marginTop: 28,
            fontWeight: 'bold',
            fontSize: 20
        },
        textQualSeuObjetivo: {
            fontWeight: 'bold',
            width: "70%",
            fontSize: 19,
            marginTop: 30,
            textAlign: 'center'
    
        },
        backgroundIcon: {
            marginTop: 15,
        },
        iconPlus: {
            bottom: 24,
            marginLeft: 7
        },
        prosseguirBackground: {
            marginTop: 40,
            height: 58,
            width: 310
        },
    
        textProsseguir: {
            fontSize: 23,
            bottom: 47,
            marginLeft: 100,
            color: '#ffff'
        }
})