import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {

        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 5 },
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting: {
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },



    image: {
        width: 70,
        height: 70,
        borderRadius: 30
    },


    lenghtText: {
        color: '#fff',
        fontSize: 35,
        fontFamily: fonts.text,
        textAlign: 'center',
    },

    tasks: {
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground: {
        backgroundColor: '#333333'
    },

    tasksText: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout: {
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox: {
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box: {
        height: 130,
        width: '100%',
        marginTop: 30,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 1 },
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover',
        paddingTop: 15,
        paddingHorizontal: 10
    },

    rText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: fonts.text,
    },

    textFooter: {
        borderTopColor: '#ccc',
        paddingTop: 15,
        paddingBottom: 10,
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#2F8643',
        textAlign: 'center',
        fontSize: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered: {
        justifyContent: 'center',
        alignSelf: 'center',
    },

    circleProgressView: {
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle: {
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer: {
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer: {
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    },
    headerPontos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 25
    },
    /* Header Pontos: */
    logo: {
        width: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#348343'
    },
    userName: {
        width: 250,
        height: 40,
        borderWidth: 2,
        borderColor: '#348343',
        justifyContent: 'center',
        padding: 5
    },
    containerLugares: {
        flex: 1,
        width: '100%',
        borderTopColor: '#000',
        borderTopWidth: 2,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    textLugares: {
        fontSize: 20,
        fontWeight: '500',
    }
})