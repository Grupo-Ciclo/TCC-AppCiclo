import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View, Dimensions, RefreshControl, StatusBar, Alert, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import url from "../../services/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import image from '../../assets/cicloBG.png';
import Grid from '../../components/Grids/Lixeira';
export default function Home() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    async function listarDados() {
        try {
            /* const response = await api.get(`TCC-Ciclo/bd/lixeira/listar.php?pagina=${page}&limite=10`); */
            const response = await api.get(`TCC-Ciclo/bd/lixeira/lixeira.php?pagina=${page}&limite=10`);
            if (lista.length >= response.data.totalItems) return;

            if (loading === true) return;

            setLoading(true);

            setLista([...lista, ...response.data.resultado]);
            setPage(page + 1);
        } catch (error) {
            console.log(error)
        }
    }
    const renderItem = function ({ item }) {
        return (
            <Grid
                data={item}
            />
        )
    }

    /* Get user Info */
    const [userData, setUserData] = useState(null);
    async function getUserData() {
        try {
            const userData = await AsyncStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.log('Error retrieving user data:', error);
            return null;
        }
    }
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
        listarDados();
    }, [page, totalItems, isFocused]);

    const onRefresh = () => {
        listarDados();
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <MaterialIcons name="menu" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.headerPontos}>

                <View style={styles.userPicture}>
                    <Image style={styles.logo} source={require('../../assets/UserIcon.png')} />
                </View>
                <View style={styles.userName}>
                    <Text>{userData?.nome}</Text>
                </View>
            </View>

            <View style={styles.containerBox}>
                <TouchableOpacity onPress={() => navigation.navigate("Pontos")}>
                    <View>
                        <View style={styles.box}>
                            <ImageBackground source={image} style={styles.imageBack}
                                imageStyle={{ borderRadius: 25 }}
                            >
                                <Text style={styles.rText}>Você possui: </Text>
                                <Text style={styles.lenghtText}>{userData?.pontos} pontos</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLugares}>
                <Text style={styles.textLugares}>Lixeiras próximas:</Text>
                <FlatList
                    data={lista}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}