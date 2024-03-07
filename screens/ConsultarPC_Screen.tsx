import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../routes';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import colors from './src/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

type GetConsultarPlanDeConsumoResponse = {
    id: number,
    dosis: number;
    fechaDeFin: string;
    fechaDeInicio: string;
    frecuencia: number;
    nombreDeMedicamento: string;
}


type ConsultarPCScreenProps = StackScreenProps<RootStackParamList, 'ConsultarPC_Screen'>;
//StackScreenProps es un tipo proporcionado por la biblioteca de navegación React Navigation 
//StackScreenProps que propiedades de navegacion espera recibir una pantalla
const ConsultarPC_Screen = ({ navigation }: ConsultarPCScreenProps) => {

    const [data, setData] = useState<GetConsultarPlanDeConsumoResponse[]>([]);
    const [selected, setSelected] = useState<GetConsultarPlanDeConsumoResponse>();
    const [selectedValue, setSelectedValue] = useState<number>();

    useEffect(() => {
        // Usando Fetch
        /* fetch("http://localhost:8080/api/planesDeConsumo")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setData(json)
            })
            .catch((error) => console.error(error)) */
        // Ejemplo POST con Fetch
        /* fetch('http://localhost:8080/api/planesDeConsumo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 1, nombre: 'Plan de Consumo 1', dosis: '2 pastillas', frecuencia: 'cada 8 horas', fechaInicio: '2021-10-01', fechaTermino: '2021-10-15' })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la peticion')
                }

                return response.json()
            })
            .then((json) => {
                console.log(json)
            })
            .catch((error) => console.error(error)) */
        
        // Usando Axios
        axios.get<GetConsultarPlanDeConsumoResponse[]>('http://localhost:8080/api/planesDeConsumo')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.error(error))
        
        // Ejejmplo POST con Axios
        /* axios.post('http://localhost:8080/api/planesDeConsumo', {
            id: 1,
            nombre: 'Plan de Consumo 1',
            dosis: '2 pastillas',
            frecuencia: 'cada 8 horas',
            fechaInicio: '2021-10-01',
            fechaTermino: '2021-10-15'
        }).then((response) => {
            // Status 400 - 500 se hace el throw automatico
            console.log(response.data)
        }).catch((error) => console.error(error)) */
    }, [])

    useEffect(() => {
        // Js hay false y falsy
        // hay true y truthy

        // JS null -> false
        if (selectedValue) {
            console.log({selectedValue, tipo: typeof selectedValue})
            const selectedId = parseInt(selectedValue.toString())

            const selected = data.find((item) => item.id == selectedId)

            console.log(selected)

            if (selected)
                setSelected(selected)
        }
    }, [selectedValue]);

    return (
        <View style={styles.container}>

            <View>
            <Text style={styles.title} >Consultar Plan de Consumo</Text>
            </View>
                
            
            <View>
            <Text>Selecione el Plan de Consumo a consultar:</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {data.map((item) => 
                        <Picker.Item key={item.id} label={item.nombreDeMedicamento} value={item.id} />
                    )}
                </Picker>
            </View>
                

                <TouchableOpacity style={styles.buttonConsultar}>
                    <FontAwesome5 name="eye" size={18} color={'white'} />
                    <Text style={styles.buttonText}>Consultar</Text>
                </TouchableOpacity>

                <Text>Detalles del Plan de Consumo:</Text>

                <View style={styles.infoConteiner}>
                    
                    <Text>ID Plan de Consumo: {selected?.id}</Text>
                    <Text>Nombre del Medicamento: {selected?.nombreDeMedicamento}</Text>
                    <Text>Dosis: {selected?.dosis}</Text>
                    <Text>Frecuencia: {selected?.frecuencia}</Text>
                    <Text>Fecha de Inicio: {selected?.fechaDeInicio}</Text>
                    <Text>Fecha de Termino: {selected?.fechaDeFin}</Text>
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
