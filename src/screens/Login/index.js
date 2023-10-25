import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  Alert,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Splash } from '../../lotties/Splash'; 
import api from '../../services/api';

export default function Login() {
  const navigation = useNavigation();
  const [logged, setLogged] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');



  async function login() {
    console.log(email);
    console.log(senha); 
    const obj = { email, senha };
    const res = await api.post('TCC-Ciclo/BD/login/login.php', obj);
    console.log(res.data)
    await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));

    if (res.data.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {
       await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));
      await AsyncStorage.setItem('@userEmail', email);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });

    }

  }


  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');

    if (user) {
      setLogged(1);


      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setLogged(2)
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar translucent hidden />
      <Image style={styles.logo} source={require('../../assets/ciclo_logo.png')} />

      <View style={styles.form}>
        <TextInput
          style={styles.login}
          placeholder="Email"
          placeholderTextColor='#413B33'

          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Senha"
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.loginSave}
          onPress={login}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>
        Não tem uma conta?{' '}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => navigation.navigate('NovoUsuario')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  )
}