import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RootStackParamList } from "../routes";
import { StackScreenProps } from "@react-navigation/stack";
import colors from "./src/colors";
import { useCreateUsuario } from "./metodos/serviceAPI";

type FormData = {
  correo: string;
  nombreUsuario: string;
  password: string;
};

type SignInScreenProps = StackScreenProps<RootStackParamList, "SignInScreen">;

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const { mutateAsync} = useCreateUsuario();
  const { control, handleSubmit, trigger } = useForm<FormData>({
    defaultValues: {
      correo: "",
      nombreUsuario: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const isValid = await trigger();
    if (isValid) {
      try {
        await mutateAsync({
          correo: data.correo,
          nombreUsuario: data.nombreUsuario,
          password: data.password,
        });
        Alert.alert(
          "Usuario creado correctamente en el servidor",
        );
      } catch (error) {
        console.error(error);
        Alert.alert("Error al crear el usuario");
      }
    } else {
      Alert.alert("Por favor, complete todos los campos del formulario.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <View style={styles.formContainer}>
        <Text>Nombre de Usuario</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ingrese el nombre de Usuario"
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="nombreUsuario"
        />

        <Text>Correo Electrónico</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ingrese el email"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="correo"
        />

        <Text>Contraseña</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ingrese su nueva contraseña"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={[styles.button, styles.color1Button]}
            onPress={handleSubmit(onSubmit)}
            
            
          >
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
