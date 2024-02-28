import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, RootTapParamList } from '../../routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type HomeSectionProps = {
    onPress: () => void
}

const HomeSection = ({ onPress }: HomeSectionProps) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title="Gestionar Plan de Comsumo" onPress={onPress} />
                
            </View>
            <View style={styles.titleAlert}><Text>Alertas:</Text></View>
            
       
        
            <View style={styles.alertContainer}>
                <View style={styles.tituloContainer}>
                    <Text>Proximo Medicamento</Text>
                </View>
                <View>
                    <Text></Text>
                    <Text>Medicamento:</Text>
                </View>
                <View>
                    <Text>Hora:</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.alertContainer}></View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom:40,
        margin: 30,

    },
    titleAlert:{
        borderColor: 'pink',
        borderWidth: 1,
        marginBottom: 50,
        
    },
    line: {
        marginTop: 20,
        backgroundColor: 'red'
    },
    alertContainer: {
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        margin: 5,
        marginTop:10,
        height:100,
        width: '90%',
    },
    tituloContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 5,
        position:'absolute',
        top: -35,
        alignSelf:'center',
        backgroundColor: 'red',
        borderRadius: 5,
    }
});

export default HomeSection;