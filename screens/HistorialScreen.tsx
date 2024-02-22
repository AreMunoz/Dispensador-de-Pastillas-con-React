import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../routes';


type HistorialScreenProps = StackScreenProps<RootStackParamList, 'HistorialScreen'>;
const HistorialScreen = ({ navigation } : HistorialScreenProps) => {


    return (
        <View style={styles.container}>
            <Text>Historial Screen</Text>
            <Text>Acá ira un filtro para le historial</Text>
            <Text>Acá ira una tabla con nombre del medicamento, fecha, hora, dosificado o no dosificado</Text>
            {/* pantalla de historial que se trae de la bd */}
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

export default HistorialScreen;

