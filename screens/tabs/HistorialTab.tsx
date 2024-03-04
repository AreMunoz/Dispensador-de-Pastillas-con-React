import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, RootTapParamList } from '../../routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import colors from '../src/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';

type HistorialSectionProps = {
    onPress: () => void
}

const HistorialSection = ({ onPress }: HistorialSectionProps) => {

    const navigation = useNavigation(); // Obtiene el objeto navigation para navegar entre pantallas

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Aqui debe de exportar en PDF')}>
            <AntDesign name="download" size={24} color="white" />
                <Text style={styles.buttonText} >Exportar en PDF</Text>
            </TouchableOpacity>

            <View style={styles.titleAlert}><Text>Últimos Registros:</Text></View>



            <View style={styles.boxAlertContainer}>
                <View>
                    <Text>Medicamento:</Text>
                    <Text>Hora:</Text>
                    <Text>Fecha:</Text>
                    <Text>Estado:</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({});

export default HistorialSection;