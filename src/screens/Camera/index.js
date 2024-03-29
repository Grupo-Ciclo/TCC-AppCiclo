import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(){

const [hasPermission, setHasPermission] = useState(null);
const [scanned, setScanned] = useState(false);
useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Peso depositado: ${data}. Seus pontos agora estão habilitados`);
  };
if (hasPermission === null) {
    return <Text>Requerindo o acesso à câmera</Text>;
}
if (hasPermission === false) {
    return <Text>Não temos acesso à câmera</Text>;
}

return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Escanear Novamente'} onPress={() => setScanned(false)} />}
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