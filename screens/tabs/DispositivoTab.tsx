import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons, MaterialCommunityIcons, Feather, FontAwesome5 } from "@expo/vector-icons";
import colors from "../src/colors";
import { useNavigation } from "@react-navigation/native";
import { getHealthStatus } from "../metodos/dispositivoAPI";

interface FormData {
  IDcabina: string;
}

const IP = "20.83.162.105";
type CabinStatus = "Conectado" | "Desconectado" | null;

const DispositivoTab = () => {
  const { control, getValues } = useForm<FormData>();
  const [connectedCabins, setConnectedCabins] = useState<string[]>([]);
 
  const [cabinStatus, setCabinStatus] = useState<{
    cabina1: CabinStatus;
    cabina2: CabinStatus;
    cabina3: CabinStatus;
  }>({
    cabina1: null,
    cabina2: null,
    cabina3: null,
  });
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      const data = await getHealthStatus();
      console.log("Received data pulsando boton:", data);
      setCabinStatus({
        cabina1: data.cabina1 ? "Desconectado" : "Conectado",
        cabina2: data.cabina2 ? "Desconectado" : "Conectado",
        cabina3: data.cabina3 ? "Desconectado" : "Conectado",
      });
      console.log("HTTP Status: 200"); // Confirm successful status
    } catch (error) {
      console.log("HTTP Status: 500"); // Confirm error status
      Alert.alert("Error", "No se pudo obtener el estado de las cabinas");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Vincular Dispositivo</Text>
        <Text style={styles.textFormat}>Presione para validar el estado de la cabina</Text>
      </View>

      <View style={styles.buttonContainer}>

        <View>
          <TouchableOpacity
            style={[
              styles.color3Button,
              styles.buttonManual,
              { marginBottom: 50 },
            ]}
            onPress={handlePress}
          >
            <MaterialIcons name="on-device-training" size={32} color="white" />
            <Text style={[styles.textFormat, styles.buttonText]}>
              Estado de la cabina
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.alertContainer}>
          <View style={styles.tituloContainer}>
            <Text style={styles.tituloTexto}>Estado de la cabina</Text>
          </View>
          <View>
            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>Cabina 1:</Text>
              <Text style={[
                  styles.textFormat,
                  { color: cabinStatus.cabina1 === "Conectado" ? "green" : "red" },
                ]}>
                {cabinStatus.cabina1 || "Desconocido"}
              </Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>Cabina 2:</Text>
              <Text style={[
                  styles.textFormat,
                  { color: cabinStatus.cabina2 === "Conectado" ? "green" : "red" },
                ]}>
                {cabinStatus.cabina2 || "Desconocido"}
              </Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>Cabina 3:</Text>
              <Text style={[
                  styles.textFormat,
                  { color: cabinStatus.cabina3 === "Conectado" ? "green" : "red" },
                ]}>
                 {cabinStatus.cabina3 || "Desconocido"} 
              </Text>
            </View>
          </View>
        </View>


        <Text style={styles.textFormat}>Acciones manuales para las cabinas del dispensador</Text>
        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          
        onPress={() => navigation.navigate("VaciarCabinaSelect" as never)}
        >
          <MaterialCommunityIcons
            name="hand-coin-outline"
            size={30}
            color="white"
          />
          <Text style={[styles.textFormat, styles.buttonText]}>
            Vaciar cabina
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color2Button]}
          
        onPress={() => navigation.navigate("DesatascarCabina" as never)}
        >
          <FontAwesome5
            name="fan"
            size={30}
            color="white"
          />
          <Text style={[styles.textFormat, styles.buttonText]}>
            Desatascar cabina
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",

  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    width: 350,
  },
  buttonManual: {
    padding: 10,
    width: "auto",
    margin: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  alertContainer: {
    borderWidth: 3,
    borderColor: colors.Blue.medium,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    margin: 5,
    marginTop: 10,
    marginBottom: 25,
    height: "auto",
    width: 350,
    borderRadius: 10,
  },
  tituloContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    position: "absolute",
    top: -35,
    alignSelf: "center",
    backgroundColor: colors.Blue.medium,
    borderColor: colors.Blue.medium,
    borderRadius: 5,
    width: "90%",
  },
  tituloTexto: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
  color1Button: {
    backgroundColor: colors.Orange.dark,
    paddingHorizontal: 60,
  },
  color2Button: {
    backgroundColor: colors.Green.light,
  },
  color3Button: {
    backgroundColor: colors.Lila.main,
  },
  textFormat: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  card: { flexDirection: "row", gap: 16, marginBottom: 4 },
});

export default DispositivoTab;
