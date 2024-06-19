import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../src/colors";
import {
  Ionicons,
  AntDesign,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import { AlertasResponse } from "../metodos/serviceAPI";
import { API } from "../services/const";

type HomeSectionProps = {
  onPress: () => void;
};

const HomeSection = ({ onPress }: HomeSectionProps) => {
  const navigation = useNavigation(); // Obtiene el objeto navigation para navegar entre pantallas
  const [data, setData] = useState<AlertasResponse[]>([]);

  const fetchAlertData = async () => {
    try {
      const response = await API.get<AlertasResponse[]>(
        "/planDeConsumoProgramado/alertasProximos"
      );
      console.log({ data: response.data });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlertData(); // Fetch data on component mount

    const intervalId = setInterval(() => {
      fetchAlertData(); // Fetch data every 30 seconds
    }, 30000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const renderItem = ({ item }: { item: AlertasResponse }) => {
    return (
      <View style={styles.boxAlertContainer}>
        <View style={[styles.tituloContainer, styles.titleNextMedicine]}>
          <Text style={styles.tituloTexto}>Próximo medicamento:</Text>
        </View>
        <View style={{ padding: 5, paddingTop: 20 }}>
          <View style={styles.card}>
            <AntDesign name="medicinebox" size={24} color="black" />
            <Text style={styles.textFormat}>{item.nombreDeMedicamento}</Text>
          </View>
          <View style={styles.card}>
            <Fontisto name="date" size={24} color="black" />
            <Text style={styles.textFormat}>{item.siguienteDosis}</Text>
          </View>
          <View style={styles.card}>
            <FontAwesome5 name="tablets" size={24} color="black" />
            <Text style={styles.textFormat}>
              Dosis: {item.dosisEnPastillas}
            </Text>
          </View>
          <View style={styles.card}>
          <AntDesign name="inbox" size={24} color="black" />
            <Text style={styles.textFormat}>
              Número de cabina: {item.numCabina}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No tienes alertas próximas</Text>
    </View>
  );

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

      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={styles.lista}
      />
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
  lista: {
    width: "90%",
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 20,
    flex: 1,
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
    marginTop: 60,
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
    marginBottom: 20,
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
    borderColor: colors.Alert.green,
    padding: 10,
    margin: 5,
    marginTop: 40,
    gap: 10,
    height: "auto",
    width: "95%",
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
});

export default HomeSection;
