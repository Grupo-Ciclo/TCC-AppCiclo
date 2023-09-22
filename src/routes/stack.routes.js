import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import Mapa from "../screens/Map"
import Camera from "../screens/Camera"
import Lixeira from "../screens/Lixeira"


const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
           
            <Stack.Screen name="Home" component={AuthRoutes}/>
            <Stack.Screen name="Login" component={Login}/>       
            <Stack.Screen name="Usuario" component={Usuario}/> 
            <Stack.Screen name="NovoUsuario" component={NovoUsuario}/> 
            <Stack.Screen name="Mapa" component={Mapa}/>
            <Stack.Screen name="Camera" component={Camera}/>
            <Stack.Screen name="Lixeira" component={Lixeira}/>
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;