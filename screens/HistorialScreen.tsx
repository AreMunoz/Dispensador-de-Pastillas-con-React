import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistorialScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Historial Screen</Text>
            {/* pantalla de historial que se trae de la bd */}
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

export default HistorialScreen;

