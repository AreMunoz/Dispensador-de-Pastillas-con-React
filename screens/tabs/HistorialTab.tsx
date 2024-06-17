import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import colors from "../src/colors";
import axios from "axios";
import { Fontisto, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { HistorialConsumoRespose } from "../metodos/serviceAPI";
import { API } from "../services/const";

type HistorialSectionProps = {
  onPress: () => void;
};

const HistorialSection = ({ onPress }: HistorialSectionProps) => {
  const navigation = useNavigation(); // Obtiene el objeto navigation para navegar entre pantallas
  const [data, setData] = useState<HistorialConsumoRespose[]>([]);
  const flatListRef = useRef<FlatList>(null);
  
  const fetchHistorialData = async () => {
    try {
      const response = await API.get<HistorialConsumoRespose[]>("/planDeConsumoDispensado/obtenerPlanes");
      console.log({ data: response.data });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchHistorialData();
    }, [])
  );

  useEffect(() => {
    if (data.length > 0 && flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [data]);

  // useEffect(() => {
  //   API.get<HistorialConsumoRespose[]>("/planDeConsumoDispensado/obtenerPlanes")
  //     .then((response) => {
  //       console.log({ data: response.data });
  //       const { data } = response;
  //       setData(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const renderItem = ({ item }: { item: HistorialConsumoRespose }) => {
    //const textColor = item.dosificado ? "green" : "red";
    // {item.dosificado ? "Dosificado" : "No dosificado"}
    const textColor = "green";
    return (
      <View style={styles.boxAlertContainer}>
        <View>
          <View style={styles.card}>
            <AntDesign name="medicinebox" size={24} color="black" />
            <Text style={styles.textFormat}>
              Medicamento: {item.nombreDeMedicamento}
            </Text>
          </View>

          <View style={styles.card}>
            <Fontisto name="date" size={24} color="black" />
            <Text style={styles.textFormat}>Fecha: {item.fechaDispensada}</Text>
          </View>

          <View style={styles.card}>
            <Feather name="inbox" size={24} color="black" />
            <Text style={styles.textFormat}>Cabina: {item.numCabina}</Text>
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

      <View>
        <Text style={styles.subtitle}>Último medicamento consumido:</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          // justifyContent: "flex-start",
          // flex: 1,
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
    alignSelf: "center",
    marginBottom: 20,
    flex: 1,
  },
  card: { flexDirection: "row", gap: 16, marginBottom: 4 },
});

export default HistorialSection;
