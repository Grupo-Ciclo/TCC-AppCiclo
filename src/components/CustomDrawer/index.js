import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import image from '../../assets/cicloBG.png'
const CustomDrawer = FC = () => {
    const navigation = any = useNavigation();

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
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} style={styles.imageBack}>
                <View>
                    <Image style={styles.logo} source={require('../../assets/UserIcon.png')} />
                    <View style={styles.drawerButton}>
                        <TouchableOpacity
                            style={styles.Pages}
                            onPress={() => {
                                navigation.navigate("Pontos")
                                navigation.dispatch(DrawerActions.closeDrawer())
                            }}
                        >
                            <Text style={styles.PagesText}>Pontos</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.drawerButton}>
                        <TouchableOpacity
                            style={styles.Pages}
                            onPress={() => {
                                navigation.navigate("Camera")
                                navigation.dispatch(DrawerActions.closeDrawer())
                            }}
                        >

                            <Text style={styles.PagesText}>Ler código QR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.drawerButton}>
                        <TouchableOpacity
                            style={styles.Pages}
                            onPress={() => {
                                navigation.navigate("Lixeira")
                                navigation.dispatch(DrawerActions.closeDrawer())
                            }}
                        >
                            <Text style={styles.PagesText}>Informações da Lixeira</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => logout()}
                        style={styles.Sair}
                    >
                        <Text style={styles.SairText}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </View >
    );
}

export default CustomDrawer;