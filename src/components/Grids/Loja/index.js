import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Evilions, Ionsions, AntDesign, Ionicons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps = {
    data: {
        id: string,
        nome: string,
        desc: string,
    }
}

CardLoja = ({ data } = DadosProps) => {

    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();

    return (
        <>
            {data.id === undefined && data.nome === undefined ?
                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>
                :
                <View >
                    <TouchableOpacity
                        style={styles.box}
                    /* onPress={() => setAbrirModal(true)} */
                    >
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 65 }}>
                                <Image style={{ width: 50, height: 10, }} source={{ uri: (url + 'apiModelo/imagem.jpg') }} />
                            </View>
                            <View style={{ width: '100%', marginTop: 3 }}>
                                <Text style={{ color: '#000', fontSize: 12 }}>{data.QRcode}</Text>
                                <Text style={{ color: '#000', fontSize: 12 }}>Local:{data.local}</Text>
                            </View>
                        </View>
                        <View style={styles.btnVeja}>
                            <Text style={styles.textBtnVeja}>Compre</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
        </>
    );
}

export default CardLoja;