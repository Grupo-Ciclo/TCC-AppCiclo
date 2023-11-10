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
        marcador: {
            width: 90,
            height: 70,
            backgroundColor: '#0909',
            flexDirection: 'column',
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#000'
        },
        marcadorImage: {
            width: '100%',
            height: '70%',
            resizeMode: 'cover',
        },
    }
);
export {css};