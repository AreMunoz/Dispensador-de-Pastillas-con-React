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
      
      <CustomText style={{ textDecorationStyle: 'dashed', fontSize: 42, alignItems: 'flex-start'}}>Usuario:</CustomText>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <CustomText>Iniciar Sesión</CustomText>
      </TouchableOpacity>
      <CustomText>¿No tienes cuenta?</CustomText>
      <TouchableOpacity style={styles.buttonOp2} onPress={() => navigation.navigate('SignInScreen')}>
        <CustomText>Crear Cuenta</CustomText>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    marginBottom: 20,
  },
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
    width: '90%',
  },
  button: {
    backgroundColor: '#354f92',
    padding: 10,
    margin: 10,
    marginBottom: 40,
    borderRadius: 5,
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
  buttonOp2: {
    backgroundColor: 'white',
    borderColor: '#354f92',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default LoginScreen;