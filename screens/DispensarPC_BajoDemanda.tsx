import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { RootStackParamList } from "../routes";
import colors from "./src/colors";
import { CustomButton } from "./components/CustomButton";
import React, { useState } from "react";
import { Alert, TextInput } from "react-native";

type DispensarBajoDemandaProps = StackScreenProps<
  RootStackParamList,
  "DispensarPC_BajoDemanda"
>;


const DispensarPC_BajoDemanda = ({ navigation }: DispensarBajoDemandaProps) => {
  const [text, setText] = useState("");

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    Alert.alert("Texto ingresado:", text);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title, {marginBottom:20}]}>Plan de consumo bajo demanda</Text>
      </View>
      <View style={{ width: "80%" }}>
        <Text style={styles.Subtitle}>
          Escriba a continuación la razón por la cual deba de consumir este plan
          de consumo
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            height: 90,
            width: 320,
            borderColor: "gray",
            borderWidth: 1,
            margin: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Escribe la razón aquí..."
          onChangeText={handleInputChange}
          value={text}
        />
      </View>
      <View style={{ width: "80%" }}>
        <CustomButton
          text="Despachar"
          onPress={() => navigation.navigate("ExpressPC_Screen" as never)}
          theme={"outline"}
        />
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
