import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RootStackParamList } from '../routes';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './src/colors';

interface FormData {
  username: string;
  password: string;
  email: string;
}

type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignInScreen'>;

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a tu backend para registro, etc.
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <View style={styles.formContainer}>
        <Text>Nombre de Usuario</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ingrese el nombre de Usuario"

            />
          )}
          name="username"
          rules={{ required: true }}
        />


        <Text>Correo Electrónico</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput 
              {...field}
              style={styles.input}
              placeholder="Correo Electrónico"
              
            />
          )}
          name="email"
          rules={{ required: true }}
        />


        <Text>Contraseña</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
            
              {...field}
              placeholder="Contraseña"
              secureTextEntry
              style={styles.input}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={[styles.button, styles.color1Button]} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.color2Button]} onPress={handleSubmit(onSubmit)}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%', // Ancho del contenedor del formulario
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%', // Ancho del campo de entrada de texto
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    padding: 10,
    margin: 10,
    marginBottom: 40,
    borderRadius: 10,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    gap: 12,
  },
  color1Button: {
    backgroundColor: colors.Lila.main,
  },
  color2Button: {
    backgroundColor: colors.Blue.cyan,
  },
 
});


export default SignInScreen;

