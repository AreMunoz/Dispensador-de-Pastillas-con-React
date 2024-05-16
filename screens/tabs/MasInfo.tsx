import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, RootTapParamList } from "../../routes";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import colors from "../src/colors";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
type MasInfoSectionProps = {
  onPress: () => void;
};


const MasInfoSection = ({ onPress }: MasInfoSectionProps) => {
  const navigation = useNavigation(); 
  const handleLogout = () => {
    Alert.alert(
      "¿Desea cerrar sesión?",
      "",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("Login" as never) }
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer} >
        <Ionicons name="person-circle-outline" size={100} color="black" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            color: "grey",
          }}
        >
          dev
        </Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.buttonExit]}
      onPress={handleLogout}>
        <MaterialIcons name="exit-to-app" size={24} color="white" />
        <Text style={[styles.buttonText, styles.textFormat]}>Salir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonManual]}>
        <Entypo name="open-book" size={24} color="white" />
        <Text style={[styles.buttonText, styles.textFormat]}>
          Manual de Usuario
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.BG.light,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    padding: 20,
    width: "90%",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonExit: { backgroundColor: colors.Red.light },
  buttonManual: { backgroundColor: colors.Blue.dark },

  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  textFormat: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
});
export default MasInfoSection;
