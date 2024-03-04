import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../routes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import colors from './src/colors';

type EliminarPCScreenProps = StackScreenProps<RootStackParamList, 'EliminarPC_Screen'>;

const EliminarPC_Screen = ({ navigation } : EliminarPCScreenProps) => {


    return (
        <View style={styles.container}>
            <View>
            <Text>Eliminar Plan de Consumo Screen</Text>
            <Text>Eliga el Plan de Consumo a Eliminar:</Text>
            </View>


            <TouchableOpacity style={[styles.button, styles.buttonEliminar]}>
            <FontAwesome name="trash-o" size={24} color="white" />
                <Text style={styles.buttonText}>Eliminar Plan de Consumo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonRegresar]}>
                <Ionicons name="return-up-back" size={24} color={'white'} />
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>

            
            
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
        marginBottom: 20,
        alignItems: 'center',
    },
    button: {
        padding: 20,
        width: '90%',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonEliminar: { backgroundColor: colors.Red.light, },
    buttonRegresar: { 
        backgroundColor: colors.Blue.dark,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
});

export default EliminarPC_Screen;
