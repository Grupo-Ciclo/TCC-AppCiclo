import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    /* Header: */

    imageBackground: {
        width: '100%',
        flexDirection: 'column',
        gap: 20,
        paddingBottom: 20,
    },
    headerUserIcon: {
        width: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#348343',
        backgroundColor: '#fff',
        marginTop: 30,
    },
    headerTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginTop: 25,

    },

    headerTextP: {
        fontSize: 20,
        color: '#fff',
    },
    headerTextH1: {
        fontSize: 27,
        color: '#fff',
    },







    box: {
        backgroundColor: '#fafafa',
        padding: 5,
        width: '100%',
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    loading: {
        marginTop: 10,
        marginBottom: 10,
    },

    search: {
        borderBottomWidth: 0.6,
        borderBottomColor: "gray",
        padding: 10,
        width: '90%',

    },

    containerSearch: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 25,
    },

    iconSearch: {
        alignSelf: 'center',
        paddingLeft: 10,
        top: 10
    },

    

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 20,
    },

    logo: {
        width: 175,
        height: 60,
        alignSelf: "center",
        marginTop: 5,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    buttonWhatsapp: {
        width: 100,
        height: 42,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -3,
        zIndex: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonEdit: {
        width: 100,
        height: 42,
        backgroundColor: "#c1c1c1",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 3,
        borderRadius: 10,
        zIndex: 9,
    },

    card: {
        width: 300,
        height: 180,
        backgroundColor: '#32B76C',
        borderRadius: 8,
        marginVertical: 6
    },

    containerFloat: {
        bottom: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 10,
        zIndex: 9,
        width: 50,
        height: 50,
        justifyContent: "center",
    },

    CartButton: {
        justifyContent: "center",
        alignItems: "center",
    },

    textLoja: {
        fontSize: 20,
        fontWeight: '500',
    },
    containerLoja: {
        flex: 1,
        width: '100%',
        borderTopColor: '#000',
        borderTopWidth: 2,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
})