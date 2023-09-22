import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer= FC = () => {
    const navigation=  any= useNavigation();

    async function logout() {
        Alert.alert('Sair', `Você tem certeza que quer sair?`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image style={styles.logo} source={require('../../assets/ciclo_logo.png')} />

            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

            <ScrollView
                style={styles.container}
            >
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Usuario")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="person-outline" size={30} color="gray" />

                        <Text style={styles.PagesText}>Usuário</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Camera")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="camera" size={30} color="gray" />

                        <Text style={styles.PagesText}>Ler código QR</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Lixeira")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="trash-outline" size={30} color="gray" />

                        <Text style={styles.PagesText}>Informações da Lixeira</Text>
                    </TouchableOpacity>
                </View>

       
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <Ionicons name="log-out-outline" size={25} color="gray"/>
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;