import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RootStackParamList } from '../routes';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';


interface FormData {
  username: string;
  password: string;
  email: string;
}

type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignInScreen'>;

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const { control, handleSubmit} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a tu backend para registro, etc.
    navigation.navigate('HomeScreen');
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.formContainer}>
          <Text>Nombre de Usuario</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } })  => (
              <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
                placeholder="Nombre de Usuario"
                
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
                placeholder="Correo Electrónico"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
            )}
            name="password"
            rules={{ required: true }}
          />
          
          <Button title="Registrarse" onPress={handleSubmit(onSubmit)} />
          <View style={{ marginTop: 20 }}>
          <Button title="Iniciar sesión con Google" onPress={() => console.log('Iniciar sesión con Google')} />
          <Button title="Iniciar sesión con otro correo" onPress={() => console.log('Iniciar sesión con otro correo')} />
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
    backgroundColor: '#fff', // Color de fondo blanco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%', // Ancho del contenedor del formulario
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%', // Ancho del campo de entrada de texto
  },
});


export default SignInScreen;
  
