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

    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [conta, setConta] = useState('');
    const [email, setEmail] = useState('');
    const [pontos, setPontos] = useState(0)
    const [data, setData] = useState(null);

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            console.log(user);
            const res = await api.get(`TCC-Ciclo/bd/usuarios/listar_id.php?user=${user}`);
            setData(res.data);
            const pontos_coletor= res.data.result[4].pontos_coletor;
            setPontos(res.data.result.map(item => item.pontos_coletor));

           setPontos(pontos);
            console.log(data)
            console.log("aaaaa")
            console.log(data.conta)
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
                        <Text style={styles.lenghtText}>Ciclo</Text>
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

                        <TouchableOpacity onPress={() => navigation.navigate("Loja")}>
                            <View>
                                <View style={styles.box}>
                                        {

                                            (fill) => (
                                                <Text style={styles.numberInside}> {pontos} </Text>
                                            )
                                        }
                                    <View style={styles.textos}>
                                        <Text style={styles.rText}>Gaste seus pontos!</Text>
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