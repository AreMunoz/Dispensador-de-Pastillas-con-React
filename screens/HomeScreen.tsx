import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Acciones del Dispensador de Pastillas</Text>
            <View style={styles.buttonContainer}>
                <Button title="Gestionar Plan de Comsumo" onPress={() => console.log('Presionado Opción 1')} />
                <Button title="Vincular Dispensador" onPress={() => console.log('Presionado Opción 2')} />
                <Button title="Consulta Historial de Consumo" onPress={() => console.log('Presionado Opción 3')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default HomeScreen;
