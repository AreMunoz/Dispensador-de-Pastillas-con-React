import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, RootTapParamList } from "../../routes";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import colors from "../src/colors";
import CustomText from "../src/ui/Text";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

type HistorialSectionProps = {
  onPress: () => void;
};

const HistorialSection = ({ onPress }: HistorialSectionProps) => {
  const navigation = useNavigation(); // Obtiene el objeto navigation para navegar entre pantallas

  const renderItem = ({ item }) => {
    return (
      <View style={styles.boxAlertContainer}>
        <View>
          <View style={styles.card}>
            <AntDesign name="medicinebox" size={24} color="black" />
            <Text style={styles.textFormat}>Medicamento:</Text>
          </View>

          <View style={styles.card}>
            <Fontisto name="date" size={24} color="black" />
            <Text style={styles.textFormat}>Fecha:</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text style={styles.textFormat}>Hora:</Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text style={styles.textFormat}>Estado:</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Historial de Consumo</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Aqui debe de exportar en PDF")}
      >
        <AntDesign name="download" size={24} color="white" />
        <Text style={styles.buttonText}>Exportar en PDF</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.subtitle}>Último medicamento consumido:</Text>
      </View>

      <FlatList
        data={["medicamento1", "medicamento 1"]}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          flex: 1,
        }}
        style={[styles.lista]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.Orange.dark,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  titleAlert: {
    margin: 10,
  },
  boxAlertContainer: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    borderColor: colors.Orange.dark,
    borderWidth: 3,
  },
  textFormat: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  lista: {
    width: "90%",
  },
  card: { flexDirection: "row", gap: 16, marginBottom: 4 },
});

export default HistorialSection;
