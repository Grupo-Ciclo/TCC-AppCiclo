import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },

    Pages: {
        flexDirection: 'row',
    },

    Sair: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },



    PagesText: {
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#fff',
        alignSelf: "center",
    },

    SairText: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#fff',
        alignSelf: "center",
    },

    footer: {
        backgroundColor: '#347E43',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    userPicture: {
        backgroundColor: '#fff',
        width: 70,
        height: 70,
        alignSelf:'center',
        borderRadius: 50,

    },
    logo: {
        width: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#348343',
        backgroundColor:'#fff'
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    drawerButton: {
        backgroundColor: '#347E43',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 15,
    },
})