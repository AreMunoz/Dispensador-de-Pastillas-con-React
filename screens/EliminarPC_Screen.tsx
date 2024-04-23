import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../routes';
import { Feather } from '@expo/vector-icons';
import colors from './src/colors';
import { CustomButton } from './components/CustomButton';

type EliminarPCScreenProps = StackScreenProps<RootStackParamList, 'EliminarPC_Screen'>;

const EliminarPC_Screen = ({ navigation } : EliminarPCScreenProps) => {


    return (
        <TouchableWithoutFeedback onPress={navigation.goBack}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalOrder}>
              <Feather
                name="alert-triangle"
                size={48}
                color="#273abe"
              />
              <Text
                style={[ styles.title,
                  {
                    textAlign: "justify",
                    color: colors.Blue.dark,
                  },
                ]}
              >
                ¿Eliminar Plan de Consumo?
              </Text>
              <Text
                style={[styles.Subtitle, { textAlign: "center" }]}
              >
                ¿Estás seguro de querer eliminar este plan de consumo? Ten en
                cuenta que no podrás recuperarlo una vez se haya eliminado
              </Text>
  
              <CustomButton
                theme='outline'
                text="Cancelar"
                onPress={navigation.goBack}
              />
              <CustomButton
                theme="fill"
                text="Eliminar"
              />
            </View>
          </View>
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

export default EliminarPC_Screen;
