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
        id_coletor: string,
        nome_coletor: string,
        email_coletor: string,
        senha_coletor: string,
        pontos_coletor: string,
        contabancaria_coletor: string,
        telefone_coletor: string,
        local_coletor: string
    }
}


CardUsuarios = ({ data } = DadosProps) => {

    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();


    async function excluir(nome_coletor, id_coletor) {

        Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome_coletor, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`TCC-Ciclo/BD/deletar.php?id=${id_coletor}`);

                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Usuarios');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }


    return (


        <>


            {data.id === undefined && data.nome === undefined ?

                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>

                :

                <View>
                    <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.nome_coletor}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}


                    >
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                                <View style={{ width: 65 }}>
                                    <Image style={{ width: 50, height: 50, }} source={{ uri: (url + 'apiModelo/imagem.jpg') }} />
                                </View>
                                <View style={{ width: '100%', marginTop: 3 }}>
                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.nome_coletor} - Pontos: {data.pontos_coletor}</Text>
                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.email_coletor} - Senha: {data.senha_coletor}</Text>
                                </View>
                            </View>


                        </TouchableOpacity>
                    </SwipeableRow>

                </View>
            }



            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >
                <View style={styles.centralizarModal}>
                    <View style={styles.CardContainerModal}>
                        <TouchableOpacity
                            style={styles.removeItem}
                            onPress={() => setAbrirModal(false)}
                        >
                            <Evilions name="close" size={25} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.Cliente}>{data.nome} - {data.nivel}</Text>


                        <View style={styles.Section}>
                            <Ionsions style={styles.Icon} name="circle-person-outline" size={22} color="#c1c1c1" />

                        </View>



                        <View style={styles.Section}>
                            <Ionsions style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                            <Text style={styles.Entrada}>Email: {data.email_coletor}</Text>
                            <Text style={styles.Entrada}>Senha: {data.senha_coletor}</Text>
                        </View>


                    </View>
                </View>
            </Modal>



        </>
    );
}

export default CardUsuarios;