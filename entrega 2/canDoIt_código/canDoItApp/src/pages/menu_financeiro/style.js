import {StyleSheet} from 'react-native';



export default StyleSheet.create ({
        container: {
            flex: 1,
            alignItems: 'center'
        }, 
    
        header: {
            top: 25,
            height: 80,
            width: 400,
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
            backgroundColor: '#A70069',
            justifyContent: 'center',
            alignItems: 'center'
        },
        arrowBack: {
            top: 20,
            right: 165
            
        },
    
        engrenagem: {
            width: 40,
            height: 40,
            left: 158,
            bottom: 15
        },
    
        viewInicial: {
            marginTop: 50,
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
            marginTop: 18,
            width: '100%',
            flexDirection: 'row'
        },
        viewMidLeft: {
            width: '50%',
        },
        textMidLeft: {
            fontWeight: 'bold',
            fontSize: 19,
            marginBottom: 30,
            marginLeft: 30
    
        },
        viewMidRight: {
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        numConquistas: {
            fontWeight: 'bold',
            fontSize: 19,
            top: 10,
            marginLeft: 80
    
        },
        conquistasIcon: {
            marginLeft: 15,
            height: 50,
            width: 50,
        },
        viewMidRightBottom: {
            width: 100,
            height: 50,
            right: '83.5%',
            top: '12.5%'
        },
        textMidRight: {
            fontWeight: 'bold',
            fontSize: 19,
            top: 10
        },
        statusbar: {
            width: '85%'
        },
        viewForms: {
            flexDirection: 'row',
    
        },
    
        formBackground: {
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 5,
            width: '46%',
            //width: 174,
            height: 28.9,
    
        },
    
        buttonBackground: {
            marginLeft: 10,
            width: '46%',
           //width: 174,
            marginBottom: 7,
    
        },
        buttonLabelAdd: {
            right: 94,
            fontSize: 20,
            bottom: 37
    
        },
        buttonLabelRem: {
            left: 94,
            fontSize: 20,
            bottom: 65
        },
        buttonBackgroundEncerrar: {
            width: '46%',
            bottom: 50,
        },
        labelEncerrar: {
            fontSize: 20,
            bottom: 79
        },
        viewConquistas: {
            bottom: 65,
            flexDirection: 'column',
            width: '100%',
            height: '15%',
        },
        viewTrofeus: {
            flexDirection: 'row',
            justifyContent:'center',
            height: '80%',
            width: '100%',
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
            width:'100%'
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
            marginTop: 21
        },
        backgroundButtonCancelar: {
    
        },
        textBackgroundCancelar: {
            fontSize: 19,
            bottom: 29
        }
})