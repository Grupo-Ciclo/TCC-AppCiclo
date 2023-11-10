import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View, Dimensions, RefreshControl, StatusBar, Alert } from 'react-native';
import Header from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import url from "../../services/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Home() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');
    const [email, setEmail] = useState('');

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            console.log(user);
            const res = await api.get(`TCC-Ciclo/bd/usuarios/listar_id.php?user=${user}`);
            setDados(res.data);
            console.log(dados)
            console.log("aaaaa")
            console.log(dados.dados.conta)
            console.log(res.data);
            
        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setRefreshing(false);
            setIsLoading(true);
        }

    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.lenghtText}>CardUsuarios</Text>
                        {/* <Text>Logado: {data.nome} </Text> */}
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>
                        <Text

                            style={styles.loginSave}
                            onPress={listarDados}
                        > </Text>

                    </View>
                </View>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                        <View style={styles.containerBox}>

                        <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>
                            <View>
                                <View style={styles.box}>
                                    <AnimatedCircularProgress
                                        size={80}
                                        width={8}
                                        fill={50}
                                        tintColor="#2F8643"
                                        backgroundColor="#e0e0e0"
                                        lineCap={"round"}
                                    >
                                        {
                                            (fill) => (
                                                <Text style={styles.numberInside}>123.123</Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                    <View style={styles.textos}>
                                        <Text style={styles.rText}>Total de pontos</Text>
                                        <Text style={styles.lenghtText}></Text>
                                    </View>
                                </View>
                                <Text style={styles.textFooter}></Text>
                            </View>
                        </TouchableOpacity>

                    </View> 



                </ScrollView>
            </View>
        </View>
    )
}