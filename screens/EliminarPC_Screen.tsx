import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../routes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import colors from './src/colors';

type EliminarPCScreenProps = StackScreenProps<RootStackParamList, 'EliminarPC_Screen'>;

const EliminarPC_Screen = ({ navigation } : EliminarPCScreenProps) => {


    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title} >Eliminar Plan de Consumo</Text>
            </View>



            <View>
            <Text>Eliga el Plan de Consumo a Eliminar:</Text>
                <Picker>
                    <Picker.Item label="Plan de Consumo 1" value="Plan de Consumo 1" />
                    <Picker.Item label="Plan de Consumo 2" value="Plan de Consumo 2" />
                    <Picker.Item label="Plan de Consumo 3" value="Plan de Consumo 3" />
                </Picker>
            </View>


                <Text>Detalles del Plan de Consumo:</Text>

                <View style={styles.infoConteiner}>
                    
                    <Text>ID Plan de Consumo:</Text>
                    <Text>Nombre del Medicamento:</Text>
                    <Text>Dosis:</Text>
                    <Text>Frecuencia:</Text>
                    <Text>Fecha de Inicio:</Text>
                    <Text>Fecha de Termino:</Text>
                </View>



           

            <TouchableOpacity style={[styles.button, styles.buttonEliminar]}>
            <FontAwesome name="trash-o" size={24} color="white" />
                <Text style={styles.buttonText}>Eliminar Plan de Consumo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonRegresar]} onPress={() => navigation.navigate('GestionarPlanConsumo' as never)}>
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
    title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    infoConteiner: {
        padding: 10,
        width: '90%',
        height: 'auto',
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderColor: colors.Grey.light,
        borderWidth: 2,
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
