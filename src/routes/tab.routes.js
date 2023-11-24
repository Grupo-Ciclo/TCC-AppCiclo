import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Pontos from '../screens/Pontos';
import Mapa from '../screens/Map'
import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();
    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: '#fff',
                tabBarHideOnKeyboard: false,
                tabBarLabelPosition: 'below-icon',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    paddingTop: 10,
                    backgroundColor: '#2F8643'
                },
            }}
        >


            <AppTab.Screen
                name="Inicio"
                component={DrawerRoutes}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Inicio
                            </Text>
                            <View
                                style={focused ? {

                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 45,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="Pontos"
                component={Pontos}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name='shopping-outline'
                            size={size}
                            color="#fff">

                        </MaterialCommunityIcons>
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Usuario
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />
            <AppTab.Screen
                name="Mapa"
                component={Mapa}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="map-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',

                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Mapa
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 60,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;