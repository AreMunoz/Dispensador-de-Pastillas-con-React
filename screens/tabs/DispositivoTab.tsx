import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, RootTapParamList } from '../../routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import colors from '../src/colors';
import { MaterialIcons } from '@expo/vector-icons';

type DispositivoTabProps = {
    onPress: () => void
}


interface FormData {
    IDcabina: string;
}

const DispositivoTab = ({ onPress }: DispositivoTabProps) => {
    const { control } = useForm<FormData>();

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title} >Vincular Dispositivo</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text>Ingrese el ID de la cabina a vincular</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="ID de la cabina"
                        />
                    )}
                    name="IDcabina"
                    defaultValue=""
                />
                <View>
                    <TouchableOpacity style={styles.buttonVincular}>
                        <MaterialIcons name="on-device-training" size={32} color="white" />
                        <Text style={styles.buttonText}>Vincular Cabina</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.alertContainer}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>Estado del Dispensador</Text>
                    </View>
                    <View>
                        <Text>Cabina 1:</Text>
                        <Text>Cabina 2: </Text>
                        <Text>Cabina 3:</Text>
                    </View>
                </View>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 15,
        width: '90%',
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: 350,
    },
    buttonVincular: {
        backgroundColor: colors.Lila.main,
        padding: 10,
        width: 350,
        margin: 10,
        marginBottom: 80,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
    alertContainer: {
        borderWidth: 3,
        borderColor: colors.Blue.medium,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30,
        margin: 5,
        marginTop: 10,
        marginBottom: 25,
        height: 100,
        width: 350,
        borderRadius: 10,
    },
    tituloContainer: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        position: 'absolute',
        top: -35,
        alignSelf: 'center',
        backgroundColor: colors.Blue.medium,
        borderColor: colors.Blue.medium,
        borderRadius: 5,
        width: '90%',
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
    },
    tituloTexto: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },


});
export default DispositivoTab;