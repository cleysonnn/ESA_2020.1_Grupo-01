import {StyleSheet} from 'react-native';



export default StyleSheet.create ({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }, 
        ScrollView: {
        },  
    
        header: {
            height: 80,
            width: 414,
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
            backgroundColor: '#A70069',
            alignItems: 'center'
        },
        arrowBack: {
            top: 20,
            right: 180
            
        },
    
        engrenagem: {
            width: 40,
            height: 40,
            left: 160,
            bottom: 15
        },
    
        viewInicial: {
            marginTop: 30,
            width: 414,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        textFinanceira: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 20,
            marginTop: 10
        },
        textProgresso: {
            fontWeight: 'bold',
            fontSize: 25
        },
        viewMid: {
            width: 414,
            marginTop: 18,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        viewMidLeft: {
            width: 212,
            left: 50,
            justifyContent: 'center',
        },
        textMidLeft: {
            fontWeight: 'bold',
            fontSize: 19,
            marginBottom: 30,
    
        },
        viewMidRight: {
            width: 212,
            flexDirection: 'row',
            justifyContent: 'center',
            left: 20
        },
        numConquistas: {
            fontWeight: 'bold',
            fontSize: 19,
            top: 10,
            marginLeft: 90
    
        },
        conquistasIcon: {
            bottom: 7,
            marginLeft: 15,
            height: 40,
            width: 40,
        },
        viewMidRightBottom: {
            width: 100,
            height: 50,
            right: '83.5%',
            justifyContent: 'center',
            top: '12.5%'
        },
        textMidRight: {
            fontWeight: 'bold',
            fontSize: 19,
            bottom: 17,
            left: 12
        },
        statusbar: {
            marginLeft: 22,
            width: 370,
            height: 30
        },
        viewForms: {
            flexDirection: 'row',
            height: 100
    
        },
    
        formBackground: {
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 5,
            width: 177,
            //width: 174,
            height: 28.9,
    
        },
    
        buttonBackground: {
            marginLeft: 20,
            width: 177,
           //width: 174,
            marginBottom: 7,
            bottom: 50
    
        },
        buttonLabelAdd: {
            left: 18,
            fontSize: 20,
            bottom:30
    
        },
        buttonLabelRem: {
            left: 27,
            fontSize: 20,
            bottom: 30
        },
        buttonBackgroundEncerrar: {
            width: 177,
            left: 115,
            bottom:110,
        },
        labelEncerrar: {
            fontSize: 20,
            left: 23,
            bottom: 30
        },
        viewConquistas: {
            bottom: 90,
            flexDirection: 'column',
            width: 414,
            height: 100,
        },
        viewTrofeus: {
            flexDirection: 'row',
            justifyContent:'center',
            height: 100,
            width: 414,
        },
        trofeu: {
            height: '100%',
            width: '20%',
            marginRight: '22%',
            left: '80%'
        },
        viewTextTrofeus: {
            flexDirection: 'row',
            height: '20%',
            width:'100%',
            marginBottom: 10
        },
        textTrofeus10: {
            fontSize: 19,
            marginLeft: '12%'
        },
        textTrofeus25: {
            fontSize: 19,
            marginLeft: '33.2%'
        },
        textTrofeus50: {
            fontSize: 19,
            marginLeft: '33.2%'
        },
        viewCancelar: {
            alignItems: 'center',
            height: 100,
            marginBottom: 30
        },
        backgroundButtonCancelar: {
        },
        textBackgroundCancelar: {
            fontSize: 19,
            bottom: 29,
            left: 33
        }
})