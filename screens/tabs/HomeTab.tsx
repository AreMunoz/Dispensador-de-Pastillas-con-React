import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, RootTapParamList } from "../../routes";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import colors from "../src/colors";
import { Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";

type HomeSectionProps = {
  onPress: () => void;
};

const HomeSection = ({ onPress }: HomeSectionProps) => {
  const navigation = useNavigation(); // Obtiene el objeto navigation para navegar entre pantallas

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PlanDeConsumoTab" as never)}
      >
        <Ionicons name="calendar" size={32} color="white" />
        <Text style={styles.buttonText}>Gestionar Plan de Consumo</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.subtitle}>Alertas:</Text>
      </View>

      <View style={[styles.boxAlertContainer, styles.boxNextMedicine]}>
        <View style={[styles.tituloContainer, styles.titleNextMedicine]}>
          <Text style={styles.tituloTexto}>Próximo medicamento: </Text>
        </View>
        <View style={{ padding: 5, paddingTop: 20 }}>
          <View style={styles.card}>
            <AntDesign name="medicinebox" size={24} color="black" />
            <Text style={styles.textFormat}>Medicamento: Paracetamol </Text>
          </View>
          
          <View style={styles.card}>
          <Fontisto name="date" size={24} color="black" />
            <Text style={styles.textFormat}>Fecha: 2024-06-30 12:00</Text>
          </View>

        </View>
      </View>

      <View style={styles.line}></View>

      <View style={[styles.boxAlertContainer, styles.boxNewTime]}>
        <View style={[styles.tituloContainer, styles.titleNewTime]}>
          <Text adjustsFontSizeToFit style={styles.tituloTexto}>Medicamento No Consumido:</Text>
        </View>
        <View style={{ padding: 5, paddingTop: 20 }}>
        <View style={styles.card}>
            <AntDesign name="medicinebox" size={24} color="black" />
            <Text style={styles.textFormat}>Medicamento: Paracetamol</Text>
          </View>
          <View style={styles.card}>
          <Ionicons name="timer" size={24} color="black" />
            <Text style={styles.textFormat}>Se reprogramará para la siguiente hora:</Text>
          </View>
          <Text style={[styles.textFormat, {textAlign: "center"}]}>11:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: colors.Orange.dark,
    padding: 10,
    borderRadius: 5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    marginLeft: 20,
    fontSize: 22,
  },

  subtitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 50,
  },
  line: {
    borderBlockColor: colors.Red.light,
    backgroundColor: colors.Red.light,
    width: "100%",
    height: 5,
    marginTop: 10,
  },

  tituloContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    position: "absolute",
    top: -35,
    alignSelf: "center",
    borderRadius: 5,
    width: "90%",
  },
  titleNextMedicine: {
    backgroundColor: colors.Alert.green,
    borderColor: colors.Alert.green,
  },

  titleNewTime: {
    backgroundColor: colors.Alert.red,
    borderColor: colors.Alert.red,
  },
  boxAlertContainer: {
    borderWidth: 3,
    padding: 10,
    margin: 5,
    marginTop: 10,
    marginBottom: 25,
    height: "auto",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "white",
  },
  boxNextMedicine: {
    borderColor: colors.Alert.green,
  },
  boxNewTime: {
    borderColor: colors.Alert.red,
    marginTop: 60,
  },

  tituloTexto: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
  },
  textFormat: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  card: { flexDirection: "row", gap: 16, marginBottom: 4 },
});

export default HomeSection;
