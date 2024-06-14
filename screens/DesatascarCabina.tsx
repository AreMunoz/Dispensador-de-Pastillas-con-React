import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "./src/colors";
import { postDesatascarCabina, postVaciarCabina } from "./metodos/dispositivoAPI";

type DesatascarCabinaSelectProps = StackScreenProps<
  RootStackParamList,
  "DesatascarCabina"
>;

const DesatascarCabina = ({
  navigation,
  route,
}: DesatascarCabinaSelectProps) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async (numCabina: string) => {
    setLoading(true);
    setError(null);
    try {
      await postVaciarCabina({ numCabina });
      // Puedes manejar la respuesta o navegación aquí
    } catch (e) {
      setError("Error al vaciar la cabina");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Desatascar Cabina</Text>
      </View>
      <Text>Seleccione la cabina a desatascar</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          onPress={() => {handleAction("1"), console.log("Vaciar Cabina 1")}}
          disabled={loading}
        >
          <FontAwesome5
            name="fan"
            size={30}
            color="white"
          />
          <Text style={styles.buttonText}>Cabina 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          onPress={() => {handleAction("2"), console.log("Vaciar Cabina 2")}}
          disabled={loading}
        >
         <FontAwesome5
            name="fan"
            size={30}
            color="white"
          />
          <Text style={styles.buttonText}>Cabina 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color3Button]}
          onPress={() => {handleAction("3"), console.log("Vaciar Cabina 3")}}
          disabled={loading}
        >
          <FontAwesome5
            name="fan"
            size={30}
            color="white"
          />
          <Text style={styles.buttonText}>Cabina 3</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color={colors.Blue.dark} />}
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
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default DesatascarCabina;
