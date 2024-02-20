import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

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
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
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

export default LoginScreen;