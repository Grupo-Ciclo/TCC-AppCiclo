import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { Text, View, Alert, StyleSheet, setSucess, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../../services/api'


export default function Scanner() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [link, setLink] = useState("");
  const [id, setId] = useState("");


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const qrCodeData = data;
    setLink(qrCodeData);

    try {
      const obj = {
        id: id,
        link: link,
      }


      const res = await api.post('QR/bd/salvar.php', obj);

      if (res.data.success === false) {
        Alert.alert("Erro ao Salvar", res.data.mensagem);
      } else {
        Alert.alert("Salvo com Sucesso", "Registro Salvo");
      }
    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Aperte para escanear de novo!'} onPress={() => setScanned(false)} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})