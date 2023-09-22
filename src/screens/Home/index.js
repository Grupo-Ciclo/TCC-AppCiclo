import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';
import pontos from '../Login/index';
import { useRoute } from '@react-navigation/native';
import Login from '../Login/index';
import CardUsuarios from '../../components/Grids/Usuarios';

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
            await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[4].id));
            const res = await api.get(`TCC-Ciclo/bd/usuarios/listar.php?user=${user}`);
            setDados(res.data);


        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

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

        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        CardUsuarios

                        <Text>Logado: {data.nome} </Text>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>
                        <Text

                            style={styles.loginSave}
                            onPress={listarDados}
                        > {usu}</Text>

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
                                                <Text style={styles.numberInside}>{dados.pontosColetor}</Text>
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