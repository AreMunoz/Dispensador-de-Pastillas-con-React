import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList } from "../routes";
import { Feather } from "@expo/vector-icons";
import colors from "./src/colors";
import { CustomButton } from "./components/CustomButton";

type DispensarBajoDemandaProps = StackScreenProps<
  RootStackParamList,
  "DispensarPC_BajoDemanda"
>;

const DispensarPC_BajoDemanda = ({ navigation }: DispensarBajoDemandaProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Plan de consumo bajo demanda</Text>
      </View>
      <View>
        <Text style={styles.Subtitle}>Escriba a continuación la razón</Text>
      </View>
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
    fontSize: 19,
  },
  Subtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
});

export default DispensarPC_BajoDemanda;
