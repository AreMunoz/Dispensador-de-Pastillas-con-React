import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../src/colors";

type PCSectionProps = {
  onPress: () => void;
};

const PlanDeConsumoTabScreen = ({ onPress }: PCSectionProps) => {
  // Función para manejar la acción
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Plan de Consumo</Text>
      </View>
      <Text style={[styles.Subtitle, {width:"90%", textAlign: "center"}]}>
        Elige una opción para interactuar con tus Planes de Consumo
      </Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          onPress={() => navigation.navigate("FormScreenCrearPM" as never)}
        >
          <AntDesign name="plussquareo" size={24} color="white" />
          <Text style={styles.buttonText}>Crear nuevo Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          onPress={() => navigation.navigate("ModificarPC_Screen" as never)}
        >
          <FontAwesome name="edit" size={24} color="white" />
          <Text style={styles.buttonText}>Modificar Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color3Button]}
          onPress={() => navigation.navigate("ConsultarPC_Screen" as never)}
        >
          <FontAwesome5 name="eye" size={24} color="white" />
          <Text style={styles.buttonText}>Consultar Plan de Consumo</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.buttonManual, styles.color5Button]}
          onPress={() => navigation.navigate("ExpressPC_Screen" as never)}
        >
          <MaterialIcons name="autorenew" size={24} color="white" />
          <Text style={styles.buttonText}>Plan de consumo expres </Text>
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
    width:"100%",
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    marginBottom: 20,
  },
  Subtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
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
  color4Button: {
    backgroundColor: colors.Lila.main,
  },
  color3Button: {
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
});

export default PlanDeConsumoTabScreen;
