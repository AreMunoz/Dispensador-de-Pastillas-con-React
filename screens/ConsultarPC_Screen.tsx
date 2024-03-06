import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../routes';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import colors from './src/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-picker/picker';


type ConsultarPCScreenProps = StackScreenProps<RootStackParamList, 'ConsultarPC_Screen'>;
//StackScreenProps es un tipo proporcionado por la biblioteca de navegación React Navigation 
//StackScreenProps que propiedades de navegacion espera recibir una pantalla
const ConsultarPC_Screen = ({ navigation }: ConsultarPCScreenProps) => {


    return (
        <View style={styles.container}>

            <View>
            <Text style={styles.title} >Consultar Plan de Consumo</Text>
            </View>
                
            
            <View>
            <Text>Selecione el Plan de Consumo a consultar:</Text>
                <Picker>
                    <Picker.Item label="Plan de Consumo 1" value="Plan de Consumo 1" />
                    <Picker.Item label="Plan de Consumo 2" value="Plan de Consumo 2" />
                    <Picker.Item label="Plan de Consumo 3" value="Plan de Consumo 3" />
                </Picker>
            </View>
                

                <TouchableOpacity style={styles.buttonConsultar}>
                    <FontAwesome5 name="eye" size={18} color={'white'} />
                    <Text style={styles.buttonText}>Consultar</Text>
                </TouchableOpacity>

                <Text>Detalles del Plan de Consumo:</Text>

                <View style={styles.infoConteiner}>
                    
                    <Text>ID Plan de Consumo:</Text>
                    <Text>Nombre del Medicamento:</Text>
                    <Text>Dosis:</Text>
                    <Text>Frecuencia:</Text>
                    <Text>Fecha de Inicio:</Text>
                    <Text>Fecha de Termino:</Text>
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 24,
        marginBottom: 20,
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
    buttonRegresar: {
        padding: 20,
        width: '80%',
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.Blue.dark,
    },
    buttonConsultar: {
        padding: 10,
        paddingLeft: 30,
        width: '80%',
        height: 50,
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        backgroundColor: colors.Green.light,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
});

export default ConsultarPC_Screen;
