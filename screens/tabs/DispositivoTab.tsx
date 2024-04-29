import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, RootTapParamList } from "../../routes";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import colors from "../src/colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import VaciarCabina from "../VaciarCabina";
type DispositivoTabProps = {
  onPress: () => void;
};

interface FormData {
  IDcabina: string;
}

const DispositivoTab = ({ onPress }: DispositivoTabProps) => {
  const { control } = useForm<FormData>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Vincular Dispositivo</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.textFormat}>
          Ingrese el ID de la cabina a vincular
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="ID de la cabina"
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
              <Text style={styles.textFormat}>Cabina 1:</Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>Cabina 2:</Text>
            </View>

            <View style={styles.card}>
              <Feather name="inbox" size={24} color="black" />
              <Text style={styles.textFormat}>Cabina 3:</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonManual, styles.color1Button]}
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
          onPress={() => console.log("llenar cabina...")}
        >
          <MaterialCommunityIcons name="basket-fill" size={30} color="white" />
          <Text style={[styles.textFormat, styles.buttonText]}>
            Llenar cabina
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
    paddingHorizontal: 30,
    margin: 10,
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
  },
  color2Button: {
    backgroundColor: colors.Blue.dark,
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
