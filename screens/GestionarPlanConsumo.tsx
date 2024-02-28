import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
//<Button title="HomeTab" onPress={() => handleAction('HomeScreen')} />
//<Button title='HistorialTab' onPress={() => handleAction('HistorialTab')}/>



type GestionarPlanConsumoProps = StackScreenProps<RootStackParamList, 'GestionarPlanConsumo'>;

const GestionarPlanConsumo = ({ navigation,route }: GestionarPlanConsumoProps) => {    
    // Función para manejar la acción
    const handleAction = (action: string) => {
        if (action === 'crear') {
            // Realizar la lógica para crear un plan de consumo
            navigation.navigate('FormScreenCrearPM');
        } else if (action === 'modificar') {
            // Realizar la lógica para modificar un plan de consumo
        } else if (action === 'consultar') {
            // Realizar la lógica para consultar un plan de consumo
            navigation.navigate('ConsultarPC_Screen');
        } else if (action === 'eliminar') {
            // Realizar la lógica para eliminar un plan de consumo
            navigation.navigate('EliminarPC_Screen');
        } else if (action === 'HistorialTab') {
            // Realizar la lógica para ir a la pantalla de HistorialTab
            navigation.navigate('AccionesHardwareScreen');
        }
    };
  
    return (
      <View style={styles.container}>
        <Text>Elige una opcion del menú para interactuar con tus Planes de Consumo</Text>
        <View style={styles.buttonContainer}>
            {/* así se pone un comentario aqui */}
          <Button title="Crear Plan de consumo" onPress={() => handleAction('crear')} />
          <Button title="Modificar Plan de consumo" onPress={() => handleAction('modificar')} />
          <Button title="Consultar Plan de consumo" onPress={() => handleAction('consultar')} />
          <Button title="Eliminar Plan de consumo" onPress={() => handleAction('eliminar')} />
          
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default GestionarPlanConsumo;


