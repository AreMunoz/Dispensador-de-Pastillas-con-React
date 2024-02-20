import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';


type HomeScreenProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation } : HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Acciones del Dispensador de Pastillas</Text>
            <View style={styles.buttonContainer}>
                <Button title="Gestionar Plan de Comsumo" onPress={() => {navigation.navigate("GestionarPlanConsumo")}}/>
                <Button title="Vincular Dispensador" onPress={() => {navigation.navigate("VincularDispScreen")}} />
                <Button title="Consulta Historial de Consumo" onPress={() => {navigation.navigate("HistorialScreen")}} />
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
