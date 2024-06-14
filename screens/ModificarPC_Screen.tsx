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
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [updatedPlan, setUpdatedPlan] = useState<UpdatePlanConsumoRequest>({
    idUsuario: 1,
    id: 0,
    nombreDeMedicamento: "",
    frecuencia: 0,
    dosisEnPastillas: 0,
    siguienteDosis: "",
    ultimaDosis: "",
    numCabina: "",
  });

  const updatePlanMutation = useUpdatePlanConsumo();

  useEffect(() => {
    API.get<PlanDeConsumoResponse[]>("/planDeConsumoProgramado/obtenerPlanes")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los planes de consumo:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedValue) {
      const selected = data.find((item) => item.id === Number(selectedValue));
      if (selected) {
        setUpdatedPlan({
          idUsuario: 1, // Asume que este es el ID de usuario correcto
          id: selected.id,
          siguienteDosis: selected.siguienteDosis,
          ultimaDosis: selected.ultimaDosis,
          dosisEnPastillas: parseInt(selected.dosisEnPastillas),
          nombreDeMedicamento: selected.nombreDeMedicamento,
          frecuencia: parseInt(selected.frecuencia), // Parse frecuencia as an integer
          numCabina: selected.numCabina,
        });
      }
    }
  }, [selectedValue, data]);

  const handleInputChange = (name: string, value: string) => {
    setUpdatedPlan({
      ...updatedPlan,
      [name]: value,
    });
  };

  const handleUpdatePlan = async () => {
    if (selectedValue) {
      try {
        await updatePlanMutation.mutateAsync(updatedPlan);
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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Modificar Plan de Consumo</Text>
      </View>
      <ScrollView style={{ width: "95%" }}>
        <View>
          <Text style={[styles.Subtitle]}>
            Seleccione el Plan de Consumo:
          </Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Seleccione un Plan de Consumo" value={null} />
            {data.map((item) => (
              <Picker.Item
                key={`PC-${item.id}`}
                label={item.nombreDeMedicamento}
                value={item.id.toString()}
              />
            ))}
          </Picker>
        </View>
        <View style={[styles.infoConteiner]}>
          <Text style={[styles.SubtitleH3]}>
            Detalles del plan de consumo:
          </Text>
          <View style={[styles.info]}>
            <Text style={[styles.Subtitle]}>ID Plan de Consumo:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              {updatedPlan.id}
            </Text>
          </View>
          <View style={[styles.info]}>
            <Text style={[styles.Subtitle]}>
              Nombre del medicamento:
            </Text>
            <TextInput
              style={[styles.respuestaCard, styles.respuestaText]}
              value={updatedPlan.nombreDeMedicamento}
              onChangeText={(value) => handleInputChange("nombreDeMedicamento", value)}
            />
          </View>
          <View style={styles.box}>
            <View style={[styles.column, { flex: 1 }]}>
              <Text style={[styles.Subtitle]}>Frecuencia:</Text>
              <TextInput
                style={[styles.respuestaCard, styles.respuestaText]}
                value={updatedPlan.frecuencia.toString()} // Convert the value to a string
                onChangeText={(value) => handleInputChange("frecuencia", value)}
              />
            </View>
            <View style={[styles.column, { flex: 1 }]}>
              <Text style={[styles.Subtitle]}>Dosis:</Text>
              <View style={[{ flexDirection: "column" }]}>
                <TextInput
                  style={[
                    styles.respuestaCard,
                    styles.respuestaText,
                    { width: "auto" },
                  ]}
                  value={updatedPlan.dosisEnPastillas.toString()} // Convert the value to a string
                  onChangeText={(value) => handleInputChange("dosisEnPastillas", value)}
                />
                <Text>comprimido(s)</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={[styles.column, { flex: 1 }]}>
              <Text style={[styles.Subtitle]}>Fecha de Inicio:</Text>
              <TextInput
                style={[styles.respuestaCard, styles.respuestaText]}
                value={updatedPlan.siguienteDosis}
                onChangeText={(value) => handleInputChange("siguienteDosis", value)}
              />
            </View>
            <View style={[styles.column, { flex: 1 }]}>
              <Text style={[styles.Subtitle]}>Fecha de Fin:</Text>
              <TextInput
                style={[styles.respuestaCard, styles.respuestaText]}
                value={updatedPlan.ultimaDosis}
                onChangeText={(value) => handleInputChange("ultimaDosis", value)}
              />
            </View>
          </View>

          <View style={[styles.boxButtons]}>
            <TouchableOpacity
              style={[styles.styleButton, { backgroundColor: "#354F92" }]}
              onPress={handleUpdatePlan}
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
