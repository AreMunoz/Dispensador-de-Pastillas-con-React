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

interface FormData {
  IDcabina: string;
}

const IP = "192.168.80.123";

const DispositivoTab = () => {
  const { control, getValues } = useForm<FormData>();
  const [connectedCabins, setConnectedCabins] = useState<string[]>([]);

  const handlePress = () => {
    const ip = getValues("IDcabina");
    if (ip === IP) {
      Alert.alert("Estableciendo conexión con el dispensador", "", [], {
        cancelable: false,
      });
      setTimeout(() => {
        Alert.alert("Éxito", `Conexión exitosa con la IP ${IP}`);
        setConnectedCabins([...connectedCabins, ip]);
      }, 2000);
    } else {
      setTimeout(() => {
        Alert.alert("Error", `No se puede establecer conexión con la IP ${ip}`);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Vincular Dispositivo</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.textFormat}>Ingrese la IP de la cabina</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="IP de la cabina"
              keyboardType="numeric"
            />
          )}
          name="IDcabina"
          defaultValue=""
        />
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
              Vincular Cabina
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.alertContainer}>
          <View style={styles.tituloContainer}>
            <Text style={styles.tituloTexto}>Estado del Dispensador</Text>
          </View>
          <View>
            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>
                Cabina 1: {connectedCabins.includes(IP) && <Text style={{ color: 'green' }}>conectada</Text>}
              </Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>
                Cabina 2: {connectedCabins.includes(IP) && <Text style={{ color: 'green' }}>conectada</Text>}
              </Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>
                Cabina 3: {connectedCabins.includes(IP) && <Text style={{ color: 'green' }}>conectada</Text>}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
          onPress={() =>
            Alert.alert(
              "Error",
              "No se ha podido establecer conexión con el dispensador"
            )
          }
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
          onPress={() => {
            Alert.alert("Estableciendo conexión con el dispensador", "", [], {
              cancelable: false,
            });
            setTimeout(() => {
              Alert.alert(
                "Error",
                "No se ha podido establecer conexión con el dispensador"
              );
            }, 2000);
          }}
        >
          <MaterialCommunityIcons name="basket-fill" size={30} color="white" />
          <Text style={[styles.textFormat, styles.buttonText]}>
            Llenar cabina
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonManual,
            { backgroundColor: "#fba834", paddingHorizontal: 20 },
          ]}
          onPress={() => {
            Alert.alert("Estableciendo conexión con el dispensador", "", [], {
              cancelable: false,
            });
            setTimeout(() => {
              Alert.alert(
                "Error",
                "No se ha podido establecer conexión con el dispensador"
              );
            }, 2000);
          }}
        >
          <FontAwesome5 name="fan" size={24} color="white" />
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
    backgroundColor: colors.Red.light,
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
