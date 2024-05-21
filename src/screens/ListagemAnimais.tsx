import React, { useState, useEffect } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';

interface Animal {
    id: string;
    nome: string;
    especie: string;
    idade: string;
    ra: string;
    peso: string;
    altura: string;
    sexo: string;
    dieta: string;
    habitat: string;
}

const ListagemAnimais: React.FC = () => {
    const [animais, setAnimais] = useState<Animal[]>([]);
    const [error, setError] = useState<string | null>(null);

    const logo = require('../assets/images/logo.png');

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await axios.get('http://10.137.11.227:8000/api/animal/todos');
                setAnimais(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                setError("Ocorreu um erro ao buscar os animais");
            }
        };

        fetchAnimais();
    }, []);

    const renderItem = ({ item }: { item: Animal }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item}>
                <View style={styles.text}>
                    <Text style={styles.tituloAnimais}>{item.nome}</Text>
                    <Text style={styles.especie}>{item.especie}</Text>
                    <Text style={styles.idade}>{item.idade}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>

            <FlatList
                data={animais}
                renderItem={({ item }) => renderItem({ item })}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 130,
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#606c38',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
    },
    item: {
        backgroundColor: '#feedc6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 130,
        height: 100,
        marginRight: 25
    },
    text: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tituloAnimais: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    especie: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        marginBottom: 10,
    },
    idade: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },

});

export default ListagemAnimais;

