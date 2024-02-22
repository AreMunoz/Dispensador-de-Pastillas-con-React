import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { RootTapParamList} from '../routes';
import { NavigationContainer } from '@react-navigation/native';



type VincularDispScreenProps = StackScreenProps<RootStackParamList, 'VincularDispScreen'>;

const VincularDispScreen = ({ navigation } : VincularDispScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>Vincular Dispensador Screen</Text>
            <Text>Acciones de Vincular Dispensador de Pastillas</Text>
            <View style={styles.buttonContainer}>
                <Text>Nombre del dispensador:</Text>

                <Text>Estado del dispensador:</Text> 

                <Button title="Vincular Dispensador" onPress={() => console.log('Presionaste Vincular Dispensador Btn, crea la logica con el disp')} />
                
            </View>
        </View>
        
    );
};

//

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

export default VincularDispScreen;
