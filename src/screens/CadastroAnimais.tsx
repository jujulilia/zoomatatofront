import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import axios from 'axios';

const CadastroAnimais = () => {
    const [animais, setAnimais] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [especie, setEspecie] = useState('');
    const [ra, setRa] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [sexo, setSexo] = useState('');
    const [dieta, setDieta] = useState('');
    const [habitat, setHabitat] = useState('');

    const logo = require('../assets/images/logo.png');

    const cadastrarAnimal = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('idade', idade);
            formData.append('especie', especie);
            formData.append('ra', ra);
            formData.append('peso', peso);
            formData.append('altura', altura);
            formData.append('sexo', sexo);
            formData.append('dieta', dieta);
            formData.append('habitat', habitat);

            const response = await axios.post('http://10.137.11.227:8000/api/animal/cadastrar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#ffdab9" barStyle="light-content" />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.fText}>Cadastro de Animais</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Animal"
                    onChangeText={setNome} />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    onChangeText={setIdade} />
                <TextInput
                    style={styles.input}
                    placeholder="Espécie"
                    onChangeText={setEspecie} />
                <TextInput
                    style={styles.input}
                    placeholder="RA"
                    onChangeText={setRa} />
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    onChangeText={setPeso} />
                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    onChangeText={setAltura} />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                    onChangeText={setSexo} />
                <TextInput
                    style={styles.input}
                    placeholder="Dieta"
                    onChangeText={setDieta} />
                <TextInput
                    style={styles.input}
                    placeholder="Habitat"
                    onChangeText={setHabitat} />
            </View>

            <TouchableOpacity style={styles.imageButton} onPress={cadastrarAnimal}>
                <Text style={styles.imageButtonText}>Cadastrar Animal</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#606c38',
        paddingVertical: 10,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 130,
    },
    form: {
        padding: 10,
        backgroundColor: '#ccd5ae',
        marginBottom: 10,
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fefae0'
    },
    imageButton: {
        backgroundColor: '#606c38',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    fText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 'auto'
    },
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fefae0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    footerIcon: {
        width: 24,
        height: 24,
        margin: 10,
    },
});

export default CadastroAnimais;
