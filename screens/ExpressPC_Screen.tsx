import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";
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
import { PlanDeConsumoResponse } from "./metodos/serviceAPI";
import { FlatList, ScrollView } from "react-native-gesture-handler";
//import { PlanDeConsumoProgramadoResponse } from "./metodosService";

type ExpressPC_Props = StackScreenProps<RootStackParamList, "ExpressPC_Screen">;

const ExpressPC = ({ navigation, route }: ExpressPC_Props) => {

  const [data, setData] = useState<PlanDeConsumoResponse[]>([]);
  const [selectedItem, setSelectedItem] = useState<PlanDeConsumoResponse | null>(null);
  const [quantity, setQuantity] = useState<string>("");

  useEffect(() => {
    // Usando Axios
    API.get<PlanDeConsumoResponse[]>("/planDeConsumoProgramado/obtenerPlanes")
      .then((response) => {
        console.log({ data: response.data });
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);


  const handleItemPress = (item: PlanDeConsumoResponse) => {
    setSelectedItem(item);
    setQuantity(""); // Reset quantity input
  };
    // Filtrar solo los planes de consumo que tienen estado true
    const filteredData = data.filter((item) => item.estado);

    const handleDespachar = () => {
      if (selectedItem && quantity.trim() !== "") {
        // Aquí podrías realizar la lógica para despachar
        console.log(`Despachando ${quantity} unidades de ${selectedItem.nombreDeMedicamento}`);
        // Reiniciar el estado después de despachar
        setSelectedItem(null);
        setQuantity("");
      } else {
        console.warn("Debe seleccionar un medicamento y especificar la cantidad.");
      }
    };

    const renderItem = ({ item }: { item: PlanDeConsumoResponse }) => {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonManual, styles.color2Button]}
            onPress={() => handleItemPress(item)}
          >
            <MaterialIcons name="crisis-alert" size={24} color="white" />
            <Text style={styles.buttonText}>PC: {item.nombreDeMedicamento}</Text>
          </TouchableOpacity>
        </View>
      );
    };

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

    
        <Text>Planes de consumo activos:</Text>
        <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
     

     {selectedItem && (
        <View style={styles.despacharContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cantidad"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={[styles.buttonDespachar, styles.color2Button]}
            onPress={handleDespachar}
          >
            <Text style={styles.buttonText}>Despachar</Text>
          </TouchableOpacity>
        </View>
      )}
      
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
  despacharContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonDespachar: {
    backgroundColor: colors.Blue.dark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default ExpressPC;
