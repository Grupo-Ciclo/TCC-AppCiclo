import { StyleSheet } from "react-native";

const css = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#FFF',
            justifyContent: 'center',

        },
        map:{
            height: '70%'
        },
        search:{
            height: '30%'
        },
        distancia:
        {
            top: -40
        },
        marcador:{
            width: 40,
            height: 50,
            flexDirection: 'column',
            borderRadius: 8,
            alignItems:'center',
            bottom: 12
            
        },
        marcadorImage:{
            width: 55,
            height: 55,
            resizeMode: 'cover'
        }
    }
);
export {css};