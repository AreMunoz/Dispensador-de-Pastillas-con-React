import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "./src/colors";

//<Button title="HomeTab" onPress={() => handleAction('HomeScreen')} />
//<Button title='HistorialTab' onPress={() => handleAction('HistorialTab')}/>

type ExpressPC_Props = StackScreenProps<RootStackParamList, "ExpressPC_Screen">;

const ExpressPC = ({ navigation, route }: ExpressPC_Props) => {
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
        <Text style={styles.title}>Plan de Consumo Express</Text>
      </View>

      <View style={styles.alert}>
        <MaterialCommunityIcons
          name="alert-rhombus-outline"
          size={24}
          color="#fba834"
        />
        <Text>
          Pon una advertencia para saber cuando debe de consumir este plan de
          consumo
        </Text>
      </View>
      <View style={styles.buttonContainer}>
       

        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          onPress={() => handleAction("crear")}
        >
          <AntDesign name="plussquareo" size={24} color="white" />
          <Text style={styles.buttonText}>Accion 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          onPress={() => handleAction("modificar")}
        >
          <FontAwesome name="edit" size={24} color="white" />
          <Text style={styles.buttonText}>Accion 2</Text>
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
  alert: {
    backgroundColor: colors.Orange.light,
    borderWidth: 2,
    borderColor: colors.Orange.dark,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    width: 'auto',
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ExpressPC;
