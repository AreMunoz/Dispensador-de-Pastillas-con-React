import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { RootStackParamList } from './routes';
import GestionarPlanConsumo from './screens/GestionarPlanConsumo';
import FormScreenCrearPM from './screens/FormScreenCrearPM';
import ConsultarPC_Screen from './screens/ConsultarPC_Screen';
import SignInScreen from './screens/SignInScreen'
import ModificarPC_Screen from './screens/ModificarPC_Screen';
import EliminarPC_Screen from './screens/EliminarPC_Screen';
import BottomTab from './screens/BottomTab';
import ExpressPC_Screen from './screens/ExpressPC_Screen';
import DispensarPC_BajoDemanda from './screens/DispensarPC_BajoDemanda';
import VaciarCabina from './screens/VaciarCabina';
import Dispensar2 from './screens/Dispensar2';
import VaciarCabinaSelect from './screens/VaciarCabinaSelect';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={BottomTab} />
        <Stack.Screen name="GestionarPlanConsumo" component={GestionarPlanConsumo} />
        <Stack.Screen name="FormScreenCrearPM" component={FormScreenCrearPM} />
        <Stack.Screen name="ConsultarPC_Screen" component={ConsultarPC_Screen} />
        <Stack.Screen name="EliminarPC_Screen" component={EliminarPC_Screen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ModificarPC_Screen" component={ModificarPC_Screen} />
        <Stack.Screen name="ExpressPC_Screen" component={ExpressPC_Screen} />
        <Stack.Screen name="DispensarPC_BajoDemanda" component={DispensarPC_BajoDemanda}/>
        <Stack.Screen name="VaciarCabina" component={VaciarCabina}/>
        <Stack.Screen name="Dispensar2" component={Dispensar2}/>
        <Stack.Screen name="VaciarCabinaSelect" component={VaciarCabinaSelect}/>

      </Stack.Navigator>

      
    </NavigationContainer>
  );
};

export default Navigation;


