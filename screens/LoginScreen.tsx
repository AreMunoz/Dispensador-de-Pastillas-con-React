import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text as RNText } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import CustomText from './src/ui/Text';
import colors from './src/colors';
import { customStyles } from './src/ui/Text';
import { getUsuarios } from './metodos/serviceAPI';


interface FormData {
  username: string;
  password: string;
}


type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { control, handleSubmit } = useForm<FormData>();

  //funciones de vaidacion de usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await getUsuarios(1); // Obtener los datos del usuario con id=1 (ejemplo)

      // Verificar las credenciales
      if (email === user.correo && password === user.password) {
        // Credenciales válidas, redirigir a la siguiente pantalla
        navigation.navigate('HomeScreen'); // Nombre de la pantalla a la que se redirige después del inicio de sesión
      } else {
        // Credenciales inválidas, mostrar mensaje de error
        Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      Alert.alert('Error', 'No se pudo iniciar sesión, inténtelo de nuevo más tarde');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <RNText style={styles.title} >Dispensador de Pastillas</RNText>
      </View>
      
      <CustomText style={{textAlign: 'left'}}>Usuario:</CustomText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => {
              setEmail(text);
              onChange(text);
            }}
            value={value}
            placeholder="Username"
          />
        )}
        name="username"
        defaultValue=""
      />
      <CustomText>Contraseña:</CustomText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => {
              setPassword(text);
              onChange(text);
            }}
            value={value}
            placeholder="Password"
            secureTextEntry
          />
        )}
        name="password"
        defaultValue=""
      />
      <TouchableOpacity style={[styles.button, styles.buttonLogin]} onPress={handleLogin} >
        <CustomText>Iniciar Sesión</CustomText>
      </TouchableOpacity>
      <CustomText>¿No tienes cuenta?</CustomText>
      <TouchableOpacity style={[styles.button, styles.buttonCreateAccount ]} onPress={() => navigation.navigate('SignInScreen')}>
        <CustomText>Crear Cuenta</CustomText>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BG.light,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '90%',
    textAlign: 'justify',
  },
  button: {
    padding: 10,
    margin: 10,
    marginBottom: 40,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: colors.Blue.cyan,
  },
  buttonCreateAccount: {
    backgroundColor: 'white', 
        borderColor: colors.Blue.cyan,
        borderWidth: 4
  },

});

export default LoginScreen;