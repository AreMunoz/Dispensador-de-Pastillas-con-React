import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "./src/colors";
import { Picker } from "@react-native-picker/picker";
import { CustomButton } from "./components/CustomButton";
import {
  PlanDeConsumoResponse,
  planesDeConsumo,
  useUpdatePlanConsumo,
  UpdatePlanConsumoRequest,
} from "./metodos/serviceAPI";
//import { PlanDeConsumoResponse, planesDeConsumo, useUpdatePlanConsumo } from "./metodosService";
import { API } from "./services/const";
import axios, { isAxiosError } from "axios";

type ModificarProps = StackScreenProps<
  RootStackParamList,
  "ModificarPC_Screen"
>;

type Formulario = {
  nombreDeMedicamento: string;
  dosisEnPastillas: string;
  frecuencia: string;
  siguienteDosis: string;
  ultimaDosis: string;
};

export const ModificarPC_Screen = ({ navigation, route }: ModificarProps) => {
  const [data, setData] = useState<PlanDeConsumoResponse[]>([]);
  const [selected, setSelected] = useState<PlanDeConsumoResponse>();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [updatedPlan, setUpdatedPlan] = useState<UpdatePlanConsumoRequest>({
    idUsuario: 1,
    id: 2,
    nombreDeMedicamento: "",
    frecuencia: "",
    dosisEnPastillas: "",
    siguienteDosis: "",
    ultimaDosis: "",
    numCabina: "",
  });
  const updatePlanMutation = useUpdatePlanConsumo(); // Utilizar el hook useUpdatePlanConsumo

  useEffect(() => {
    API.get<PlanDeConsumoResponse[]>("/planDeConsumoProgramado/obtenerPlanes")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los planes de consumo:");
        console.error(error)});
  }, []);

  // Actualizar el plan de consumo seleccionado
  useEffect(() => {
    console.log({ selectedValue });
    if (selectedValue) {
      console.log({ selectedValue, tipo: typeof selectedValue });
      const selected = data.find((item) => item.id === Number(selectedValue));
      console.log(selected);
      if (selected) setSelected(selected);
      setUpdatedPlan({
        idUsuario: 1, // Asume que este es el ID de usuario correcto
        id: selected?.id ?? 2,
        siguienteDosis: selected?.siguienteDosis ?? '',
        ultimaDosis: selected?.ultimaDosis ?? '',
        dosisEnPastillas: selected?.dosisEnPastillas ?? '',
        nombreDeMedicamento: selected?.nombreDeMedicamento ?? '',
        frecuencia: selected?.frecuencia ?? '',
        numCabina: selected?.numCabina ?? ''
      });
    }
  }, [selectedValue]);

  const handleUpdatePlan = async () => {
    if (selectedValue) {
      try {
        await updatePlanMutation.mutateAsync({
          idUsuario: 1,
          id: Number(selectedValue),
          siguienteDosis: updatedPlan.siguienteDosis,
        ultimaDosis: updatedPlan.ultimaDosis,
        dosisEnPastillas: updatedPlan.dosisEnPastillas,
        nombreDeMedicamento: updatedPlan.nombreDeMedicamento,
        frecuencia: updatedPlan.frecuencia,
        numCabina: updatedPlan.numCabina
        });
        Alert.alert("Éxito", "Plan de consumo actualizado correctamente");
      } catch (error) {
        Alert.alert("Error", "Hubo un error al actualizar el plan de consumo");
      }
    } else {
      Alert.alert(
        "Error",
        "Debe seleccionar un Plan de Consumo antes de actualizar",
      );
    }
  };

  // Función para manejar la modificación del plan de consumo
  const handleModificarPlan = async () => {
    if (selectedValue) {
      try {
        // Construir el cuerpo de la solicitud con los datos actualizados
        const requestBody = {
          //id: selectedValue,
          //updatedPlanConsumo: updatedPlan,
          idUsuario: 1, // Actualiza con el idUsuario correcto
        id: Number(selectedValue),
        siguienteDosis: updatedPlan.siguienteDosis,
        ultimaDosis: updatedPlan.ultimaDosis,
        dosisEnPastillas: updatedPlan.dosisEnPastillas,
        nombreDeMedicamento: updatedPlan.nombreDeMedicamento,
        frecuencia: updatedPlan.frecuencia,
        numCabina: updatedPlan.numCabina
        };
        console.log({ "RequestBody":requestBody });
        // Realizar la solicitud POST a la ruta de modificación
        const response = await API.post(
          `planDeConsumoProgramado/modificar`,

          requestBody,
          {params: {idUsuario: 1}}
        );

        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (response.status === 200) {
          Alert.alert("Éxito", "Plan de consumo modificado exitosamente");
          console.log("Se mando al servidor", requestBody);
        } else {
          Alert.alert("Error", "Hubo un error al modificar el plan de consumo");
        }
      } catch (error) {
        // Manejar errores de red o del servidor
        console.error("Error al modificar el plan de consumo:", error);
        if (isAxiosError(error)) {
          console.error(error.response?.status);
          console.error(error.response?.status)
        }
        Alert.alert("Error", "Hubo un error al modificar el plan de consumo");
      }
    } else {
      Alert.alert(
        "Error",
        "Debe seleccionar un Plan de Consumo antes de modificar",
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.title}>Consultar Plan de Consumo</TextInput>
      </View>
      <ScrollView style={{width:"95%"}}>
        <View>
          <TextInput style={[styles.Subtitle]}>
            Seleccione el Plan de Consumo:
          </TextInput>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              console.log({ itemValue });
              setSelectedValue(itemValue);
            }}
          >
            <Picker.Item label="Seleccione un Plan de Consumo" value={null} />
            {data.map((item) => (
              <Picker.Item
                key={`PC-${item.id}`}
                label={item.nombreDeMedicamento}
                value={item.id}
              />
            ))}
          </Picker>
        </View>
        <View style={[styles.infoConteiner]}>
          <TextInput style={[styles.SubtitleH3]}>
            Detalles del plan de consumo:
          </TextInput>
          <View style={[styles.info]}>
            <TextInput style={[styles.Subtitle]}>ID Plan de Consumo:</TextInput>
            <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.id}
            </TextInput>
          </View>
          <View style={[styles.info]}>
            <TextInput style={[styles.Subtitle]}>
              Nombre del medicamento:
            </TextInput>
            <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.nombreDeMedicamento}
            </TextInput>
          </View>
          <View style={styles.box}>
            <View style={[styles.column, { flex: 1 }]}>
              <TextInput style={[styles.Subtitle]}>Frecuencia:</TextInput>
              <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
                {selected?.frecuencia}
              </TextInput>
            </View>
            <View style={[styles.column, { flex: 1 }]}>
              <TextInput style={[styles.Subtitle]}>Dosis:</TextInput>
              <View style={[{ flexDirection: "column" }]}>
                <TextInput
                  style={[
                    styles.respuestaCard,
                    styles.respuestaText,
                    { width: "auto" },
                  ]}
                >
                  {selected?.dosisEnPastillas}
                </TextInput>
                <Text>comprimido(s)</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={[styles.column, { flex: 1 }]}>
              <TextInput style={[styles.Subtitle]}>Fecha de Inicio:</TextInput>
              <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
                {selected?.siguienteDosis}
              </TextInput>
            </View>
            <View style={[styles.column, { flex: 1 }]}>
              <TextInput style={[styles.Subtitle]}>Fecha de Fin:</TextInput>
              <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
                {selected?.ultimaDosis}
              </TextInput>
            </View>
          </View>

          <View style={[styles.boxButtons]}>
            <TouchableOpacity
              style={[styles.styleButton, { backgroundColor: "#354F92" }]}
              onPress={handleModificarPlan}
            >
              <FontAwesome name="edit" size={24} color="white" />
              <Text style={styles.buttonText}>Modificar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          theme="outline"
          text="Regresar"
          icono={<Ionicons name="return-up-back" size={28} color={"#354F92"} />}
          onPress={navigation.goBack}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  Subtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  SubtitleH3: {
    textAlign: "center",
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
  },
  infoConteiner: {
    padding: 10,
    height: "auto",
    margin: 10,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: colors.Orange.light,
  },
  info: {
    padding: 5,
    width: "100%",
    height: "auto",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  formatoButton: {
    padding: 10,
    paddingLeft: 30,
    width: "90%",
    height: 50,
    margin: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonConsultar: {
    backgroundColor: colors.Orange.dark,
  },
  styleButton: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 4,
    marginBottom: 16,
  },
  boxButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 0,
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-start",
  },
  respuestaText: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    color: colors.Grey.light,
  },
  respuestaCard: {
    marginTop: 8,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default ModificarPC_Screen;
