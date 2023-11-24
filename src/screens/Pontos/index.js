import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, ImageBackground, Text } from 'react-native';
import imageBack from '../../assets/cicloBG.png'
import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Usuarios';
import Grid2 from '../../components/Grids/Loja';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pontos() {

  const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [listaLoja, setListaLoja] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalItems2, setTotalItems2] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


  async function loadData() {
    try {
      const response = await api.get(`TCC-Ciclo/bd/usuarios/listar_id.php?pagina=${page}&limite=10`);
      if (lista.length >= response.data.totalItems) return;
      if (loading === true) return;
      setLoading(true);

      setLista([...lista, ...response.data.resultado]);
      setPage(page + 1);
    } catch (error) {
      console.log(error)
    }
  }

  async function loadLoja() {
    try {
      const response = await api.get(`TCC-Ciclo/bd/loja/loja.php?pagina=${page}&limite=10`);
      if (lista.length >= response.data.totalItems2) return;
      if (loading === true) return;
      setLoading(true);

      setListaLoja([...listaLoja, ...response.data.resultado]);
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
  const renderItem2 = function ({ item }) {
    return (
      <Grid2
        data={item}
      />
    )
  }

  function Footer() {
    if (!load) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size={25} color="#000" />
      </View>
    )
  }

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
  const [lojaData, setLojaData] = useState(null);
  async function getLojaData() {
    try {
      const lojaData = await AsyncStorage.getItem('userData');
      return lojaData ? JSON.parse(lojaData) : null;
    } catch (error) {
      console.log('Error retrieving loja data:', error);
      return null;
    }
  }
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    }
    fetchUserData();
    loadData();
  }, [page, totalItems, lista]);
  

  useEffect(() => {
    const fetchLojaData = async () => {
      const data2 = await getLojaData();
      setLojaData(data2);
    }
    fetchLojaData();
    loadLoja();
  }, [page, totalItems2, listaLoja]);

  return (
    <View style={styles.container}>
      <Header title="TROCAR PONTOS"></Header>
      <View style={styles.header}>
        <ImageBackground source={imageBack} style={styles.imageBackground}>
          <Image source={require('../../assets/UserIcon.png')} style={styles.headerUserIcon}></Image>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextP}>Você possui:</Text>
            <Text style={styles.headerTextH1}>{userData?.pontos} pontos</Text>
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextP}>Histórico de pontos &gt;</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.containerLoja}>
                <Text style={styles.textLoja}>Gaste seus pontos!</Text>
{/*                 <FlatList
                    data2={listaLoja}
                    renderItem={renderItem2}
                /> */}
                <View style={styles.box}>
                  <Text>CupomA</Text>
                  <Text>Um cupom de desconto em certos estabelecimentos</Text>

                </View>

      </View>








      {/*  <View style={{ paddingHorizontal: 15, flex: 1, }}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.search}
            placeholder="Buscar Por Documento ou Nome"
            placeholderTextColor="gray"
            keyboardType="default"
            onChangeText={(busca) => setBusca(busca)}
            returnKeyType="search"
            onTextInput={() => Search()}
          />

          <TouchableOpacity
            style={styles.iconSearch}
            onPress={() => Search()}
          >
            <Ionicons name="search-outline" size={28} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
          <FlatList
            data={lista}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            onEndReachedThreshold={0.1}
            removeClippedSubviews
            initialNumToRender={10}
            onEndReached={(distanceFromEnd) => {
              if (!onEndReachedCalledDuringMomentum) {
                loadData().then(() => setLoading(false));
                setMT(true);
              }
            }}
            ListFooterComponent={(distanceFromEnd) => {
              if (!onEndReachedCalledDuringMomentum) {
                return <Footer load={loading} />
              } else {
                return <View></View>
              }
            }}
            onMomentumScrollBegin={() => setMT(false)}
            windowSize={10}
            getItemLayout={(data, index) => (
              { length: 50, offset: 50 * index, index }
            )}
          />

        </View>

        <View style={styles.containerFloat}>
          <TouchableOpacity
            style={styles.CartButton}
            onPress={() => navigation.push("NovoUsuario", { id_reg: '0' })}
          >
            <Ionicons name="add-outline" size={35} color="#fff" />
          </TouchableOpacity>
        </View>


      </View> */}

    </View>
  )
}