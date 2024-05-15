import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { RootStackParamList } from "../routes";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import colors from "./src/colors";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { CustomButton } from "./components/CustomButton";
import { API } from "./services/const";
import { PlanDeConsumoResponse } from "./metodosService";
import { ScrollView } from "react-native-gesture-handler";
/**
 type GetConsultarPlanDeConsumoResponse = {
  id: number;
  dosis: number;
  fechaDeFin: string;
  fechaDeInicio: string;
  frecuencia: number;
  nombreMedicamento: string;
};
 */

type ConsultarPCScreenProps = StackScreenProps<
  RootStackParamList,
  "ConsultarPC_Screen"
>;
//StackScreenProps es un tipo proporcionado por la biblioteca de navegación React Navigation
//StackScreenProps que propiedades de navegacion espera recibir una pantalla
const ConsultarPC_Screen = ({ navigation }: ConsultarPCScreenProps) => {
  const [data, setData] = useState<PlanDeConsumoResponse[]>([]);
  const [selected, setSelected] = useState<PlanDeConsumoResponse>();
  const [selectedValue, setSelectedValue] = useState<string|null>(null);
  /*
  const [data, setData] = useState<GetConsultarPlanDeConsumoResponse[]>([]);
  const [selected, setSelected] = useState<GetConsultarPlanDeConsumoResponse>();
  const [selectedValue, setSelectedValue] = useState<number>();
*/
  useEffect(() => {
    // Usando Fetch
    /* fetch("http://localhost:8080/api/planesDeConsumo")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setData(json)
            })
            .catch((error) => console.error(error)) */
    // Ejemplo POST con Fetch
    /* fetch('http://localhost:8080/api/planesDeConsumo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 1, nombre: 'Plan de Consumo 1', dosis: '2 pastillas', frecuencia: 'cada 8 horas', fechaInicio: '2021-10-01', fechaTermino: '2021-10-15' })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la peticion')
                }

                return response.json()
            })
            .then((json) => {
                console.log(json)
            })
            .catch((error) => console.error(error)) */

    // Usando Axios
    API.get<PlanDeConsumoResponse[]>("/planesDeConsumo/todos")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => console.error(error));

    // Ejejmplo POST con Axios
    /* axios.post('http://localhost:8080/api/planesDeConsumo', {
            id: 1,
            nombre: 'Plan de Consumo 1',
            dosis: '2 pastillas',
            frecuencia: 'cada 8 horas',
            fechaInicio: '2021-10-01',
            fechaTermino: '2021-10-15'
        }).then((response) => {
            // Status 400 - 500 se hace el throw automatico
            console.log(response.data)
        }).catch((error) => console.error(error)) */
  }, []);

  useEffect(() => {
    console.log({ selectedValue });
    // Js hay false y falsy
    // hay true y truthy

    // JS null -> false
    if (selectedValue) {
      console.log({ selectedValue, tipo: typeof selectedValue });

      const selected = data.find((item) => item.idPlanDeConsumo == selectedValue);

      console.log(selected);

      if (selected) setSelected(selected);
    }
  }, [selectedValue]);

  const handleEliminarPlan = async () => {
    if (selectedValue) {
      try {
        // Realizar la solicitud DELETE a la ruta de eliminación
        const response = await axios.delete(`/planesDeConsumo/eliminar/$idPlan=${selectedValue}`);

        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (response.status === 200) {
          Alert.alert("Éxito", "Plan de consumo eliminado exitosamente");
        } else {
          Alert.alert("Error", "Hubo un error al eliminar el plan de consumo");
        }
      } catch (error) {
        // Manejar errores de red o del servidor
        console.error("Error al eliminar el plan de consumo:", error);
        Alert.alert("Error", "Hubo un error al eliminar el plan de consumo");
      }
    } else {
      Alert.alert("Error", "Debe seleccionar un Plan de Consumo antes de eliminar");
    }
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Consultar Plan de Consumo</Text>
      </View>
      <ScrollView>
      <View>
        <Text style={[styles.Subtitle]}>Seleccione el Plan de Consumo:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => {
            console.log({ itemValue });
            setSelectedValue(itemValue)
          }}
        >
          <Picker.Item label="Seleccione un Plan de Consumo" value={null} />
          {data.map((item) => (
            <Picker.Item
              key={`PC-${item.idPlanDeConsumo}`}
              label={item.nombreMedicamento}
              value={item.idPlanDeConsumo}
            />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={[styles.formatoButton, styles.buttonConsultar]}>
        <FontAwesome5 name="eye" size={28} color={"white"} />
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>

      <View style={[styles.infoConteiner]}>
        <Text style={[styles.SubtitleH3]}>Detalles del plan de consumo:</Text>
        <View style={[styles.info]}>
          <Text style={[styles.Subtitle]}>ID Plan de Consumo:</Text>
          <Text style={[styles.respuestaCard, styles.respuestaText]}>
            {selected?.idPlanDeConsumo}
          </Text>
        </View>
        <View style={[styles.info]}>
          <Text style={[styles.Subtitle]}>Nombre del medicamento:</Text>
          <Text style={[styles.respuestaCard, styles.respuestaText]}>
            {selected?.nombreMedicamento}
          </Text>
        </View>
        <View style={styles.box}>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Frecuencia:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.frecuencia}
            </Text>
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Dosis:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.dosis} comprimido(s)
            </Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Fecha de Inicio:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.fechaInicio}
            </Text>
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Fecha de Fin:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.fechaFin}
            </Text>
          </View>
        </View>

        <View style={[styles.boxButtons]}>
          <TouchableOpacity
            style={[styles.styleButton, { backgroundColor: "#354F92" }]}
            onPress={() => navigation.navigate("ModificarPC_Screen" as never)}
          >
            <FontAwesome name="edit" size={24} color="white" />
            <Text style={styles.buttonText}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.styleButton, { backgroundColor: "#E72929" }]}
            onPress={handleEliminarPlan} 
          >
            <FontAwesome5 name="trash" size={20} color={"white"} />
            <Text style={styles.buttonText}>Eliminar</Text>
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
    width: "100%",
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
    width: "95%",
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

export default ConsultarPC_Screen;
