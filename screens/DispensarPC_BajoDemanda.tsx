import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import { RootStackParamList } from "../routes";
import colors from "./src/colors";
import { CustomButton } from "./components/CustomButton";
import React, { useEffect, useState } from "react";
import { Alert, TextInput } from "react-native";
import { API } from "./services/const";
import { PlanDeConsumoResponse } from "./metodos/serviceAPI";

type DispensarBajoDemandaProps = StackScreenProps<
  RootStackParamList,
  "DispensarPC_BajoDemanda"
>;

const DispensarPC_BajoDemanda = ({ navigation }: DispensarBajoDemandaProps) => {
  const [text, setText] = useState("");

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    Alert.alert("Texto ingresado:", text);
  };

  const [data, setData] = useState<PlanDeConsumoResponse[]>([]);
  const [selected, setSelected] = useState<PlanDeConsumoResponse>();
  const [selectedValue, setSelectedValue] = useState<string|null>(null);

  useEffect(() => {
    API.get<PlanDeConsumoResponse[]>("/planDeConsumoProgramado/obtenerPlanes")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log({ selectedValue });
    if(selectedValue){
      console.log({ selectedValue, tipo: typeof selectedValue });
      const selectedPlan = data.find((plan) => plan.id === parseInt(selectedValue));
      console.log(selectedPlan );
      if(selected) setSelected(selectedPlan);
    }
  }, [selectedValue]);



  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Text style={[styles.title, { marginBottom: 20 }]}>
          Plan de consumo bajo demanda
        </Text>
      </View>
      <View style={styles.datosCard}>
        <Text style={[styles.title, { textAlign: "center" }]}>Datos</Text>
        <Text style={styles.Subtitle}>Medicamento:</Text>
        <Text style={[styles.respuestaCard, styles.respuestaText]}>
          Paracetamol{item.nombreDeMedicamento}
        </Text>
        <View style={styles.box}>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Fecha de Inicio:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              02/05/2024
            </Text>
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Fecha de Fin:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
            
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Dosis:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              1 comprimido(s)
            </Text>
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={[styles.Subtitle]}>Fecha dispensada:</Text>
            <Text style={[styles.respuestaCard, styles.respuestaText]}>
              02/05/2024
            </Text>
          </View>
        </View>
      </View>
      <View style={{ width: "80%" }}>
        <Text style={styles.Subtitle}>
          Escriba a continuación la razón por la cual deba de consumir este plan
          de consumo
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            height: 90,
            width: 320,
            borderColor: "gray",
            borderWidth: 1,
            margin: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Escribe la razón aquí..."
          onChangeText={handleInputChange}
          value={text}
        />
      </View>
      <View style={{ width: "80%" }}>
        <CustomButton
          text="Despachar"
          onPress={() => navigation.navigate("ExpressPC_Screen" as never)}
          theme={"outline"}
        />
      </View>
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
  datosCard: {
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.Blue.cyan,
    width: "90%",
    borderRadius: 8,
    overflow: "hidden",
    padding: 12,
    marginBottom: 16,
    gap: 4,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 19,
  },
  Subtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 4,
    marginBottom: 4,
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

export default DispensarPC_BajoDemanda;
