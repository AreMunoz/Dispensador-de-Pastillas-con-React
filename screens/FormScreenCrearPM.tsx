import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const FormScreenCrearPM: React.FC = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Aquí podemos realizar acciones con los datos del formulario, como enviarlos a un servidor
    };

    return (
        <View style={styles.container}>
            <Text>Formulario</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Nombre del Medicamento"
                    />
                )}
                name="medicamento"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Dosis"
                    />
                )}
                name="dosis"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Frecuencia"
                    />
                )}
                name="frecuencia"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="A partir de qué día"
                    />
                )}
                name="fechaInicio"
                defaultValue=""
            />
            <Button title="Guardar Plan" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        width: '80%',
    },
});

export default FormScreenCrearPM;
