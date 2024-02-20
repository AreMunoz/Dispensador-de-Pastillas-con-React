import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const GestionarPlanConsumo: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute(); // Obtener la ruta de navegación
    
    // Función para manejar la acción
    const handleAction = (action: string) => {
        if (action === 'crear') {
            // Realizar la lógica para crear un plan de consumo
        } else if (action === 'modificar') {
            // Realizar la lógica para modificar un plan de consumo
        } else if (action === 'consultar') {
            // Realizar la lógica para consultar un plan de consumo
        } else if (action === 'eliminar') {
            // Realizar la lógica para eliminar un plan de consumo
        }
    };
  
    return (
      <View style={styles.container}>
        <Text>Plan de Consumo Screen</Text>
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


