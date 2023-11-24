//npm install react-native-maps --save-exact
//expo install expo-location
//expo install expo-permissions


import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image } from 'react-native';
import marcador from '../../assets/marcador.png';

import MapView, { Marker } from 'react-native-maps';

import url from '../../services/url';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { css } from '../../assets/css/Css';

import api from '../../services/api';
import config from '../../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function App() {

  const [origin, setOrigin] = useState(null);

  //2 parte busca e rotas
  const mapEl = useRef(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  async function loadEstudiosLocais() {
    try {
      console.log('lets');

      const response = await api.get(`TCC-Ciclo/bd/lixeira/listarLocaisLixeiras.php?limite=10`);
      console.log('DATA É ' + response.data);

      if (lista.length >= response.data.totalItems) return;

      if (loading === true) return;

      setLoading(true);

      setLista([...lista, ...response.data.resultado]);
      console.log('A LENGHT É', lista);
      setPage(page + 1);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        })
      } else {
        throw new Error('Location permission not granted');
      }
    })();
    loadEstudiosLocais();
  }, [lista]);



  return (
    <View style={css.container}>


      <MapView
        style={css.map}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
        loadingEnabled={true}
        /* 2 parte  busca e rotas */
        ref={mapEl}
      >
        {lista.map((estudio) => {
          return (
            <Marker key={estudio.id}
              coordinate={{ latitude: Number(estudio.latitude), longitude: Number(estudio.longitude) }}
              pinColor={'#ff0000'}
              title={"Lixeira:"}
              description={estudio.QRcode}
            >
              <View style={css.marcador}>
                <Image
                  source={require('../../assets/ciclo_logo.png')}
                  style={css.marcadorImage}
                >
                </Image>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>{estudio.local}</Text>
              </View>
            </Marker>
          )
        })}
        {/* MARCADOR PARA ORIGEM 
          <Marker           
           coordinate={{latitude: -24.4994, longitude: -47.8484 }}           
           title={'Marcador Origem'}
           description={'Testando o marcador no mapa'}        
          >
            <View style={css.marcador}>
               <Image 
                  source={marcador} 
                  style={css.marcadorImage}
                >
               </Image>
               <Text style={{color:'black' , fontSize: 11}}>Meu Local</Text>
            </View>
            </Marker>  
   
      {/* MARCADOR PARA DESTINO
      
        <Marker          
         coordinate= {destination}
         title={'Marcador Destino'}
         description={'Testando o marcador no mapa'}        
        >

          <View style={css.marcador}>
             <Image 
                source={marcador} 
                style={css.marcadorImage}
              >
             </Image>

             <Text style={{color:'black' , fontSize: 11}}>Destino</Text>

          </View>

          </Marker>  

{/* 2 parte busca e rotas  */}
        {destination &&
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={4}
            strokeColor='#fa3192'
            onReady={result => {
              setDistance(result.distance);
              mapEl.current.fitToCoordinates(
                result.coordinates, {
                edgePadding: {
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50
                }
              }
              );

            }

            }
          />

        }
      </MapView>

      {/*para segunda parte da busca e rotas acrescentamos esta view */}
      <View style={css.search}>
        <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          onPress={(data, details = null) => {
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{ listView: { height: 100 } }}
        />

      </View>
      {distance &&
        <Text style={css.distancia}> Distância: {distance} </Text>
      }
    </View >
  )
};
