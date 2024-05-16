import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { RootStackParamList } from "../routes";
import { Feather } from "@expo/vector-icons";
import colors from "./src/colors";
import { CustomButton } from "./components/CustomButton";
import { deletePlanDeConsumo } from "./metodosService";

type EliminarPCScreenProps = StackScreenProps<
  RootStackParamList,
  "EliminarPC_Screen"
>;

const EliminarPC_Screen = ({ navigation }: EliminarPCScreenProps) => {
  const translateY = useRef(new Animated.Value(500)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View style={styles.container}>
        <Animated.View style={[styles.modalBackground, { opacity }]}>
          {/* Fondo transparente */}
        </Animated.View>
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
          <View style={styles.modalOrder}>
            <Feather name="alert-triangle" size={48} color="#273abe" />
            <Text
              style={[
                styles.title,
                {
                  textAlign: "justify",
                  color: colors.Blue.dark,
                },
              ]}
            >
              ¿Eliminar Plan de Consumo?
            </Text>
            <Text style={[styles.Subtitle, { textAlign: "center" }]}>
              ¿Estás seguro de querer eliminar este plan de consumo? Ten en
              cuenta que no podrás recuperarlo una vez se haya eliminado
            </Text>

            <CustomButton
              theme="outline"
              text="Cancelar"
              onPress={navigation.goBack}
            />
            <CustomButton
              theme="fill"
              text="Eliminar"
              onPress={() => deletePlanDeConsumo}
            />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    columnGap: 8,
  },
  modalOrder: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
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

export default EliminarPC_Screen;
