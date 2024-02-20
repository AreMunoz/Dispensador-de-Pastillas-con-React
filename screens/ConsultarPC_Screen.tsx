import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../routes';


type ConsultarPCScreenProps = StackScreenProps<RootStackParamList, 'ConsultarPC_Screen'>;
const ConsultarPC_Screen = ({ navigation } : ConsultarPCScreenProps) => {


    return (
        <View style={styles.container}>
            <Text>Consultar Plan de Consumo Screen</Text>
            <h1>Consulta del Plan de Consumo</h1>
            <Text>ID Plan de Consumo:</Text>
            <Text>Nombre del Medicamento:</Text>
            <Text>Dosis:</Text>
            <Text>Frecuencia:</Text>
            <Text>Fecha de Inicio:</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ConsultarPC_Screen;
