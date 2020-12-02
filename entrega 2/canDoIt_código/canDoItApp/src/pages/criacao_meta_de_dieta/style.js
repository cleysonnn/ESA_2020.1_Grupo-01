import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor:'#fff',
  
  },
  topContainer:{
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "center",

  },
  iconSize:{
    width: 91,
    height: 91,
  
  },
  iconContainer:{
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.6,
    marginBottom: 13.47

  },
  header:{
    
    color:'#000',
    fontWeight: '400',
    fontSize: 20,
    textAlign: "center",
    marginBottom: 53,

  },
  title:{
    width: '100%',
    textAlign: "center",
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 27,

  },
  optionContainer:{
    width: 330,
    justifyContent: "space-between",
    marginBottom: 29,
    flexDirection: "row",

  },
  option:{
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  optionMarkerSize:{
    width: 20,
    height: 20,
    marginRight: 4,

  },
  textOption:{
    fontSize: 20,
    fontWeight: '400',
    color:'#000',
  
  },
  buttom:{
    width: 254,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#F65555',
    justifyContent: "center",
    alignItems: "center",
  },
  textButtom:{
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',

  }

});