import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../routes';


type EliminarPCScreenProps = StackScreenProps<RootStackParamList, 'EliminarPC_Screen'>;

const EliminarPC_Screen = ({ navigation } : EliminarPCScreenProps) => {


    return (
        <View style={styles.container}>
            <Text>Eliminar Plan de Consumo Screen</Text>
            <Text>Eliga el Plan de Consumo a Eliminar:</Text>
            
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EliminarPC_Screen;
