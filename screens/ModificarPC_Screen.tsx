import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "./src/colors";
import { Picker } from "@react-native-picker/picker";
import { CustomButton } from "./components/CustomButton";
import { PlanDeConsumoResponse } from "./metodosService";
import { API } from "./services/const";

type ModificarProps = StackScreenProps<
  RootStackParamList,
  "ModificarPC_Screen"
>;

type Formulario = {
  medicamento: string;
  dosis: string;
  frecuencia: string;
  fechaInicio: string;
};

export const ModificarPC_Screen = ({ navigation, route }: ModificarProps) => {
  const [data, setData] = useState<PlanDeConsumoResponse[]>([]);
  const [selected, setSelected] = useState<PlanDeConsumoResponse>();
  const [selectedValue, setSelectedValue] = useState<string|null>(null);

  useEffect(() => {
    API.get<PlanDeConsumoResponse[]>("/planesDeConsumo/todos")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log({ selectedValue });
    if (selectedValue) {
      console.log({ selectedValue, tipo: typeof selectedValue });
      const selected = data.find((item) => item.idPlanDeConsumo == selectedValue);
      console.log(selected);
      if (selected) setSelected(selected);
    }
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.title}>Consultar Plan de Consumo</TextInput>
      </View>
      <ScrollView>
      <View>
        <TextInput style={[styles.Subtitle]}>Seleccione el Plan de Consumo:</TextInput>
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
        <FontAwesome name="eye" size={28} color={"white"} />
        <TextInput style={styles.buttonText}>Consultar</TextInput>
      </TouchableOpacity>

      <View style={[styles.infoConteiner]}>
        <TextInput style={[styles.SubtitleH3]}>Detalles del plan de consumo:</TextInput>
        <View style={[styles.info]}>
          <TextInput style={[styles.Subtitle]}>ID Plan de Consumo:</TextInput>
          <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
            {selected?.idPlanDeConsumo}
          </TextInput>
        </View>
        <View style={[styles.info]}>
          <TextInput style={[styles.Subtitle]}>Nombre del medicamento:</TextInput>
          <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
            {selected?.nombreMedicamento}
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
            <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.dosis} comprimido(s)
            </TextInput>
          </View>
        </View>

        <View style={styles.box}>
          <View style={[styles.column, { flex: 1 }]}>
            <TextInput style={[styles.Subtitle]}>Fecha de Inicio:</TextInput>
            <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.fechaInicio}
            </TextInput>
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <TextInput style={[styles.Subtitle]}>Fecha de Fin:</TextInput>
            <TextInput style={[styles.respuestaCard, styles.respuestaText]}>
              {selected?.fechaFin}
            </TextInput>
          </View>
        </View>

        <View style={[styles.boxButtons]}>
          <TouchableOpacity
            style={[styles.styleButton, { backgroundColor: "#354F92" }]}
            onPress={() => navigation.navigate("ModificarPC_Screen" as never)}
          >
            <FontAwesome name="edit" size={24} color="white" />
            <TextInput style={styles.buttonText}>Modificar</TextInput>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.styleButton, { backgroundColor: "#E72929" }]}
            onPress={() => navigation.navigate("EliminarPC_Screen" as never)}
          >
            <FontAwesome name="trash" size={20} color={"white"} />
            <TextInput style={styles.buttonText}>Eliminar</TextInput>
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

export default ModificarPC_Screen;
