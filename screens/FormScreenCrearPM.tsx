import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "./src/colors";
import { CustomButton } from "./components/CustomButton";
import { useCreatePlanConsumo } from "./metodos/serviceAPI"
import { ScrollView } from "react-native-gesture-handler";
import DatePickerForm from "./components/DatePickerForm";
//stackScreenProps es un tipo de react-navigation que nos permite acceder a las propiedades de la navegación
type FormScreenCrearPMProps = StackScreenProps<
  RootStackParamList,
  "FormScreenCrearPM"
>;

type Formulario = {
  nombreDeMedicamento: string;
  dosisEnPastillas: string;
  frecuencia: string;
  siguienteDosis: string;
  ultimaDosis: string;
  numCabina: string;
};

const FormScreenCrearPM = ({ navigation, route }: FormScreenCrearPMProps) => {
  const { mutateAsync, isPending } = useCreatePlanConsumo();
  const { control, handleSubmit, getValues, formState: { errors }, trigger  } = useForm<Formulario>({
    defaultValues: {
      nombreDeMedicamento: "",
      dosisEnPastillas: "",
      frecuencia: "",
      siguienteDosis: "",
      ultimaDosis: "",
      numCabina: "",
    },
  });

  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({
    medicamento: false,
    dosis: false,
    frecuencia: false,
    fechaInicio: false,
    fechaFin: false,
    numCabina: false,
  });
  const handleFieldTouched = (fieldName: string) => {
    setTouchedFields({
      ...touchedFields,
      [fieldName]: true,
    });
  };
  
  const onSubmit: SubmitHandler<Formulario> = async (data) => {
    const isValid = await trigger();
    if (isValid) {
      try {
        await mutateAsync({
          id: "1",
          nombreDeMedicamento: data.nombreDeMedicamento,
          dosisEnPastillas: data.dosisEnPastillas,
          frecuencia: data.frecuencia,
          siguienteDosis: data.siguienteDosis,
          ultimaDosis: data.ultimaDosis,
          numCabina: data.numCabina,

        });
        Alert.alert(
          "Plan de consumo creado correctamente en el servidor",
          "",
          [{ text: "OK", onPress: () => navigation.navigate("PlanDeConsumoTab" as never) }],
          { cancelable: false }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert("Por favor, complete todos los campos del formulario.");
    }
  };
  
    
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.title}>Crear Plan de Consumo</Text>
        </View>

        <View></View>

        <View style={{ width: "80%" }}>
          <Text>
            Llena los datos del formulario de acuerdo a la receta medica para
            crear el plan de consumo
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Medicamento:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese el nombre del Medicamento"
                  keyboardType="default"
                  onBlur={() => { onBlur(); handleFieldTouched('nombreDeMedicamento') }}
                  onChangeText={onChange}
                  value={value}
                />
                {touchedFields.nombreDeMedicamento && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
              </>
            )}
            name="nombreDeMedicamento"
            defaultValue=""
          />
          <Text>Dosis:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={() => { onBlur(); handleFieldTouched('dosisEnPastillas') }}
                onChangeText={onChange}
                placeholder="Número de comprimidos a despachar"
                keyboardType="numeric"
              />
              {touchedFields.dosisEnPastillas && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
            </>
            )}
            name="dosisEnPastillas"
            defaultValue=""
          />
          <Text>Frecuencia:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  value={value}
                  onBlur={() => { onBlur(); handleFieldTouched('frecuencia') }}
                  onChangeText={onChange}
                  placeholder="Indique la frecuencia de consumo en horas"
                  keyboardType="numeric"
                />
                {touchedFields.frecuencia && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
              </>
            )}
            name="frecuencia"
            defaultValue=""
          />
          <Text>A partir de que día:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  value={value}
                  onBlur={() => { onBlur(); handleFieldTouched('siguienteDosis') }}
                  onChangeText={onChange}
                  placeholder="Ingrese partir de qué día"
                  keyboardType="numeric"
                />
                {touchedFields.siguienteDosis && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
              </>

            )}
            name="siguienteDosis"
            defaultValue=""
          />
          <Text>Fecha de fin:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  value={value}
                  onBlur={() => { onBlur(); handleFieldTouched('ultimaDosis') }}
                  onChangeText={onChange}
                  placeholder="Fecha en la que termina el plan de consumo"
                  keyboardType="default"
                />
                {touchedFields.ultimaDosis && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
              </>

            )}
            name="ultimaDosis"
            defaultValue=""
          />
          <Text>Cabina:</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: "Campo requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  value={value}
                  onBlur={() => { onBlur(); handleFieldTouched('numCabina') }}
                  onChangeText={onChange}
                  placeholder="Cabina en la se asigna el PC"
                  keyboardType="numeric"
                />
                {touchedFields.numCabina && !value && <Text style={styles.errorText}>Campo incompleto</Text>}
              </>

            )}
            name="numCabina"
            defaultValue=""
          />
        </View>

        

        <TouchableOpacity
          style={[styles.button, styles.buttonCrearPC]}
          onPress={handleSubmit(onSubmit)}
        >
          <FontAwesome name="check-square-o" size={24} color="white" />
          <Text style={styles.buttonText}>Crear Plan de Consumo</Text>
        </TouchableOpacity>

        <View style={{ width: "90%" }}>
          <CustomButton
            theme="outline"
            text="Regresar"
            icono={
              <Ionicons name="return-up-back" size={28} color={"#354F92"} />
            }
            onPress={navigation.goBack}
          />
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BG.light,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 350,
  },
  button: {
    backgroundColor: colors.Orange.dark,
    padding: 10,
    borderRadius: 5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 20,
  },
  buttonCrearPC: {
    backgroundColor: colors.Orange.dark,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
  },
});

export default FormScreenCrearPM;
function mutateAsync(data: Formulario) {
  throw new Error("Function not implemented.");
}
