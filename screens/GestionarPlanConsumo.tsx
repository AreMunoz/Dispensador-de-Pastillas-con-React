import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "./src/colors";

//<Button title="HomeTab" onPress={() => handleAction('HomeScreen')} />
//<Button title='HistorialTab' onPress={() => handleAction('HistorialTab')}/>

type GestionarPlanConsumoProps = StackScreenProps<
  RootStackParamList,
  "GestionarPlanConsumo"
>;

const GestionarPlanConsumo = ({
  navigation,
  route,
}: GestionarPlanConsumoProps) => {
  // Función para manejar la acción
  const handleAction = (action: string) => {
    if (action === "crear") {
      // Realizar la lógica para crear un plan de consumo
      navigation.navigate("FormScreenCrearPM");
    } else if (action === "modificar") {
      // Realizar la lógica para modificar un plan de consumo
      navigation.navigate("ModificarPC_Screen");
    } else if (action === "consultar") {
      // Realizar la lógica para consultar un plan de consumo
      navigation.navigate("ConsultarPC_Screen");
    } else if (action === "eliminar") {
      // Realizar la lógica para eliminar un plan de consumo
      navigation.navigate("EliminarPC_Screen");
    } else if (action === "HistorialTab") {
      // Realizar la lógica para ir a la pantalla de HistorialTab
      navigation.navigate("AccionesHardwareScreen");
    } else if (action === "express") {
      // Realizar la lógica para ir a la pantalla de HistorialTab
      navigation.navigate("ExpressPC_Screen");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Plan de Consumo</Text>
      </View>
      <Text>
        Elige una opcion del menú para interactuar con tus Planes de Consumo
      </Text>
      <View style={styles.buttonContainer}>
        {/* así se pone un comentario aqui */}

        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          onPress={() => handleAction("crear")}
        >
          <AntDesign name="plussquareo" size={24} color="white" />
          <Text style={styles.buttonText}>Crear nuevo Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          onPress={() => handleAction("modificar")}
        >
          <FontAwesome name="edit" size={24} color="white" />
          <Text style={styles.buttonText}>Modificar Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color3Button]}
          onPress={() => handleAction("consultar")}
        >
          <FontAwesome5 name="eye" size={24} color="white" />
          <Text style={styles.buttonText}>Consultar Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color4Button]}
          onPress={() => handleAction("eliminar")}
        >
          <FontAwesome name="trash-o" size={24} color="white" />
          <Text style={styles.buttonText}>Eliminar Plan de Consumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color5Button]}
          onPress={() => handleAction("express")}
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
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    marginBottom: 20,
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
});

export default GestionarPlanConsumo;
