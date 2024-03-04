import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../routes';
import { Ionicons } from '@expo/vector-icons';
import colors from './src/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';


type ConsultarPCScreenProps = StackScreenProps<RootStackParamList, 'ConsultarPC_Screen'>;
//StackScreenProps es un tipo proporcionado por la biblioteca de navegación React Navigation 
//StackScreenProps que propiedades de navegacion espera recibir una pantalla
const ConsultarPC_Screen = ({ navigation }: ConsultarPCScreenProps) => {


    return (
        <View style={styles.container}>
            <View>
                <Text>Consultar Plan de Consumo Screen</Text>
                <Text>Eliga el Plan de Consumo:</Text>
                <Text></Text>
                <Text>Resultados:</Text>
                <Text>ID Plan de Consumo:</Text>
                <Text>Nombre del Medicamento:</Text>
                <Text>Dosis:</Text>
                <Text>Frecuencia:</Text>
                <Text>Fecha de Inicio:</Text>
            </View>



            <TouchableOpacity style={styles.buttonRegresar}>
                <Ionicons name="return-up-back" size={24} color={'white'} />
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '90%',
        alignItems: 'center',

    },
    buttonContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonRegresar: {
        padding: 20,
        width: '90%',
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.Blue.dark,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
});

export default ConsultarPC_Screen;
