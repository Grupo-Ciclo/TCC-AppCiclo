import { StyleSheet, ImageBackground } from 'react-native';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({  
    container:{
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 40,
      justifyContent: 'center'
    },

    form:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    login:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      width: '100%',
      height: 50,
      paddingLeft: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#C1C1C1',
      marginBottom: 10,
    },

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2F8643',
      marginTop: 15,
      width: '100%',
      height: 50,
      borderRadius: 5,
      marginBottom: 15,
    },

    text:{
      color: '#fff',
      fontSize: 20,
      fontFamily: fonts.text,
    },

    logo:{
      width: 255,
      height: 265,
      marginTop: 5,
      marginBottom: 35
    },

    BG:{
      justifyContent: 'center',
      zIndex: -1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
    },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    google:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
    },

    apple:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
      marginLeft: 10,
    },

    row:{
      flexDirection: 'row',
    },

    forget:{
      color: '#737373',
      fontSize: 14,
      marginTop: 40,
    },

    textRow:{
      alignSelf: 'center',
      fontFamily: fonts.text,
      fontSize: 16,
      color: 'black',
      marginTop: 5,
      marginRight: 5,
    },

    traco:{
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#C1C1C1',
      width: '80%',
    },

    signup:{
      color: '#737373',
    },

    signupQ:{
      color: 'black',
    },

    hyperlinkStyle:{
      color: '#2F8643'
    }
})


