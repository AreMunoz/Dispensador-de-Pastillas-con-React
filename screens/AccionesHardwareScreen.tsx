import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTapParamList } from '../routes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';



type HomeScreenProps = BottomTabScreenProps<RootTapParamList, 'HomeTab'>;

type AccionesHardwareProps = StackScreenProps<RootStackParamList, 'AccionesHardwareScreen'>;




function HomeScreen({}: HomeScreenProps) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }

  function HistorialScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Historial</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator<RootTapParamList>();
function AccionesHardwareScreen() {
    return (
        
        <Tab.Navigator initialRouteName='HistorialTab'>
          <Tab.Screen name="HomeTab" component={HomeScreen} />
          <Tab.Screen name="HistorialTab" component={HistorialScreen} />
        </Tab.Navigator>
    );
  }

export default AccionesHardwareScreen;

