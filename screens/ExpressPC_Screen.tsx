import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "./src/colors";
import { API } from "./services/const";
import { PlanDeConsumoProgramadoResponse } from "./metodosService";

type ExpressPC_Props = StackScreenProps<RootStackParamList, "ExpressPC_Screen">;

const ExpressPC = ({ navigation, route }: ExpressPC_Props) => {

  const [data, setData] = useState<PlanDeConsumoProgramadoResponse[]>([]);

  useEffect(() => {
    // Usando Axios
    API.get<PlanDeConsumoProgramadoResponse[]>("/planesDeConsumoProgramados/todos")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Plan de consumo bajo demanda</Text>
      </View>

      <View style={styles.alert}>
        <MaterialCommunityIcons
          name="alert-rhombus-outline"
          size={32}
          color="#fba834"
        />
        <View style={{ width: "80%" }}>
          <Text style={styles.textFormat}>
            El plan de consumo bajo demanda debe ser utilizado solamente en caso
            de emergencia
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>

      {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.buttonManual, styles.color1Button]}
            onPress={() => navigation.navigate("DispensarPC_BajoDemanda" as never)}
          >
            <MaterialIcons name="crisis-alert" size={24} color="white" />
            <Text style={styles.buttonText}>Paracetamol</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          onPress={() => navigation.navigate("DispensarPC_BajoDemanda" as never)}
        >
          <MaterialIcons name="crisis-alert" size={24} color="white" />
          <Text style={styles.buttonText}>Paracetamol</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color4Button]}
          onPress={() =>
            navigation.navigate("DispensarPC_BajoDemanda" as never)
          }
        >
          <MaterialIcons name="crisis-alert" size={24} color="white" />
          <Text style={styles.buttonText}>Omeprazol</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
  },
  textFormat: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonManual: {
    backgroundColor: "green",
    padding: 20,
    width: 350,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  color1Button: {
    backgroundColor: colors.Orange.dark,
  },
  color2Button: {
    backgroundColor: colors.Blue.dark,
  },
  color3Button: {
    backgroundColor: colors.Lila.main,
  },
  color4Button: {
    backgroundColor: colors.Red.light,
  },
  color5Button: {
    backgroundColor: colors.Green.light,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  alert: {
    backgroundColor: colors.Orange.light,
    borderWidth: 2,
    borderColor: colors.Orange.dark,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    width: "90%",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ExpressPC;
