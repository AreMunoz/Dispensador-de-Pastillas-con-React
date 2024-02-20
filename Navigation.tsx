import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './routes';
import GestionarPlanConsumo from './screens/GestionarPlanConsumo';
import FormScreenCrearPM from './screens/FormScreenCrearPM';
import HistorialScreen from './screens/HistorialScreen';
import AccionesHardwareScreen from './screens/AccionesHardwareScreen';
import VincularDispScreen from './screens/VincularDispScreen';
import ConsultarPC_Screen from './screens/ConsultarPC_Screen';


const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GestionarPlanConsumo" component={GestionarPlanConsumo} />
        <Stack.Screen name="FormScreenCrearPM" component={FormScreenCrearPM} />
        <Stack.Screen name="HistorialScreen" component={HistorialScreen} />
        <Stack.Screen name="AccionesHardwareScreen" component={AccionesHardwareScreen} />
        <Stack.Screen name="VincularDispScreen" component={VincularDispScreen} />
        <Stack.Screen name="ConsultarPC_Screen" component={ConsultarPC_Screen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


