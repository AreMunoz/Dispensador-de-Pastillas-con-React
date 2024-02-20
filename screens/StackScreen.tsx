import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HistorialScreen from './HistorialScreen'; // Asumiendo que tienes una pantalla HistorialScreen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const HistorialStack = () => { // Cambiado el nombre de la función para evitar conflicto de nombres
    return (
        <Stack.Navigator>
            <Stack.Screen name="Historial" component={HistorialScreen} />
        </Stack.Navigator>
    );
};

const StackScreen: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Historial" component={HistorialStack} /> {/* Usamos el componente HistorialStack */}
        </Tab.Navigator>
    );
};

export default StackScreen;

