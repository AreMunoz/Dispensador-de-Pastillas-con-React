import { RootStackParamList } from "../routes";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "./src/colors";
import { Picker } from "@react-native-picker/picker";
import { CustomButton } from "./components/CustomButton";

type VaciarCabinaScreenProps = StackScreenProps<
  RootStackParamList,
  "VaciarCabina"
>;
const VaciarCabina = ({ navigation }: VaciarCabinaScreenProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={navigation.goBack}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalOrder}>
            <Text
              style={[
                styles.title,
                {
                  textAlign: "justify",
                  color: colors.Blue.dark,
                },
              ]}
            >
            </Text>

            <Text style={[styles.Subtitle, { textAlign: "center" }]}>
              Selecione la cabina a vaciar
            </Text>
            <Picker 
            />
            <Text style={[styles.Subtitle, { textAlign: "center" }]}>
              Al confirmar se empezara el proceso de vaciado
            </Text>
          </View>
        </View>
          <CustomButton
            theme="outline"
            text="Cancelar"
            onPress={navigation.goBack}/>
          <CustomButton
            theme="fill"
            text="Vaciar"
            onPress={() => console.log("Vaciando cabina")}
          />
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  modalBackground: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    width: "85%",
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
export default VaciarCabina;
