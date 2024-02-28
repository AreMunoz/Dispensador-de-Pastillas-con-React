import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { RootTapParamList } from '../routes';
import { Feather, Ionicons, FontAwesome5 ,Entypo } from "@expo/vector-icons"
import HomeSection from './tabs/HomeTab';


type HomeScreenProps = BottomTabScreenProps<RootTapParamList, 'HomeTab'>;


function HomeTab({ navigation, route}: HomeScreenProps) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <HomeSection onPress={() => console.log("HOli")}/>
      </View>
    );
  }

  function HistorialTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Historial</Text>
      </View>
    );
  }

  function DispositivoTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dispositivo</Text>
      </View>
    );
  }
  function MasInfo() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dispositivo</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator<RootTapParamList>();
function BottomTab() {
    return (
        
        <Tab.Navigator initialRouteName='HistorialTab' screenOptions={{
          tabBarActiveTintColor: "#65B741"
        }}>
          <Tab.Screen name="HomeTab" component={HomeTab} options={{tabBarIcon: ({ size, color}) => <Feather name='home' size={size} color={color}/>}}/>
          <Tab.Screen name="HistorialTab" component={HistorialTab} options={{tabBarIcon: ({ size, color}) => <FontAwesome5 name='history' size={size} color={color}/>}} />
          <Tab.Screen name="DispositivoTab" component={DispositivoTab} options={{tabBarIcon: ({ size, color}) => <Ionicons name='hardware-chip-outline' size={size} color={color}/>}} />
          <Tab.Screen name="MasInfo" component={MasInfo} options={{tabBarIcon: ({size, color}) => <Entypo name='dots-three-horizontal' size={size} color={color}/>}}/>
        </Tab.Navigator>
    );
  }

export default BottomTab;

