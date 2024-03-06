import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { RootTapParamList } from '../routes';
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons"
import HomeSection from './tabs/HomeTab';
import MasInfo from './tabs/MasInfo';
import DispositivoTab from './tabs/DispositivoTab';
import HistorialSection from './tabs/HistorialTab';


type HomeScreenProps = BottomTabScreenProps<RootTapParamList, 'HomeTab'>;
type MasInfoSectionProps = BottomTabScreenProps<RootTapParamList, 'MasInfo'>;
type DispositivoTabProps = BottomTabScreenProps<RootTapParamList, 'DispositivoTab'>;
type HistorialSectionProps = BottomTabScreenProps<RootTapParamList, 'HistorialTab'>;

function HomeTab({ navigation, route }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeSection onPress={() => console.log("funciona home tab")} />
    </View>
  );
}

function HistorialTab({ navigation, route }: HistorialSectionProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HistorialSection onPress={() => console.log("funciona historial tab")} />
    </View>
  );
}

function DispositivoSection({ navigation, route }: DispositivoTabProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DispositivoTab onPress={() => console.log("funciona el tab del dipositivo")} />
    </View>
  );
}
function MasInfoSection({ navigation, route }: MasInfoSectionProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MasInfo onPress={() => console.log("funciona mas info")} />
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTapParamList>();
function BottomTab() {
  return (

    <Tab.Navigator initialRouteName='HistorialTab' screenOptions={{
      tabBarActiveTintColor: "#65B741"
    }}>
      <Tab.Screen name="HomeTab" component={HomeTab} options={{ tabBarIcon: ({ size, color }) => <Feather name='home' size={size} color={color} />, title: "Holi" }} />
      <Tab.Screen name="HistorialTab" component={HistorialTab} options={{ tabBarIcon: ({ size, color }) => <FontAwesome5 name='history' size={size} color={color} /> }} />
      <Tab.Screen name="DispositivoTab" component={DispositivoSection} options={{ tabBarIcon: ({ size, color }) => <Ionicons name='hardware-chip-outline' size={size} color={color} /> }} />
      <Tab.Screen name="MasInfo" component={MasInfoSection} options={{ tabBarIcon: ({ size, color }) => <Entypo name='dots-three-horizontal' size={size} color={color} /> }} />
    </Tab.Navigator>
  );
}

export default BottomTab;

