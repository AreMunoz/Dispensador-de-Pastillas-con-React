import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import colors from './src/colors';
//stackScreenProps es un tipo de react-navigation que nos permite acceder a las propiedades de la navegación
type FormScreenCrearPMProps = StackScreenProps<RootStackParamList, 'FormScreenCrearPM'>;

//iniciamos forms
interface Formulario {
    medicamento: string;
    dosis: string;
    frecuencia: string;
    fechaInicio: string;
}
/* 
interface IFormInput {
    medicamento: string;
    dosis: string;
    frecuencia: string;
    fechaInicio: string;
}
*/

const FormScreenCrearPM = ({ navigation, route }: FormScreenCrearPMProps) => {

    const { control, handleSubmit } = useForm<Formulario>({
        defaultValues: {
            medicamento: '',
            dosis: '',
            frecuencia: '',
            fechaInicio: '',
        },
    });

    const onSubmit: SubmitHandler<Formulario> = (data) => {
        console.log(data);
        // Here you can perform actions with the form
    }
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title} >Crear Plan de Consumo</Text>
            </View>


            <Text>Llena los datos del formulario de acuerdo a la receta medica para crear el plan de consumo</Text>
            <View style={{ marginTop: 20 }}>
                <Text>Medicamento:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Ingrese el nombre del Medicamento"
                        />
                    )}
                    name="medicamento"
                    defaultValue=""
                />
                <Text>Dosis:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Ingrese la dosis "
                        />
                    )}
                    name="dosis"
                    defaultValue=""
                />
                <Text>Frecuencia:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Indique la frecuencia de consumo en horas"
                        />
                    )}
                    name="frecuencia"
                    defaultValue=""
                />
                <Text>A partir de que día:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Ingrese partir de qué día"
                        />
                    )}
                    name="fechaInicio"
                    defaultValue=""
                />
            </View>


            <TouchableOpacity style={[styles.button, styles.buttonCrearPC]} onPress={() => console.log('se debe de crear el plan de consumo')}>
                <FontAwesome name="check-square-o" size={24} color="white" />
                <Text style={styles.buttonText}>Crear Plan de Consumo</Text>
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 350,
    },
    button: {
        backgroundColor: colors.Orange.dark,
        padding: 10,
        borderRadius: 5,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 20,
    },
    buttonRegresar: {
        backgroundColor: colors.Blue.dark,
    },
    buttonCrearPC: {
        backgroundColor: colors.Orange.dark,
    },
});

export default FormScreenCrearPM;
