import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text as RNText } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import CustomText from './src/ui/Text';
import colors from './src/colors';
import { customStyles } from './src/ui/Text';


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

  const onSubmit = (data: FormData) => {
    /* if (email === "") {
        Alert.alert("Error", "El correo electrónico es requerido");
        return;
      }
  
      if (password === "") {
        Alert.alert("Error", "La contraseña es requerida");
        return;
      }
  
      if (password !== "123456") {
        Alert.alert("Error", "La contraseña es incorrecta");
        return;
      }
  
      if (email.includes("@") === false) {
        Alert.alert("Error", "El correo electrónico es inválido");
        return;
      }
   */
    navigation.navigate("HomeScreen");
    // Aquí son las acciones con los datos del formulario, como autenticar al usuario, etc.
    //
  };

  return (
    <View style={styles.container}>
      <View>
        <RNText style={styles.title} >Dispensador de Pastillas</RNText>
      </View>
      
      <CustomText>Usuario:</CustomText>
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
      <TouchableOpacity style={[styles.button, styles.buttonLogin]} onPress={handleSubmit(onSubmit)}>
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
    marginLeft: 20,
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