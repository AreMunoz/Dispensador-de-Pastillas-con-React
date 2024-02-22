import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTapParamList } from '../routes';
import  HomeScreen  from './HomeScreen';
import  HistorialScreen  from './HistorialScreen';
import { StackScreenProps } from '@react-navigation/stack';


type BottomTabProps = StackScreenProps<RootStackParamList, 'BottomTabProps'>;

const Tab = createBottomTabNavigator<RootTapParamList>();
export const BottomTab = ({ navigation, route }: BottomTabProps) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="HistorialTab" component={HistorialScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
});
export default BottomTab;
//type AccionesHardwareProps = StackScreenProps<RootStackParamList, 'AccionesHardwareScreen'>;


/*
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
  export const BottonTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="HistorialTab" component={HistorialScreen} />
        </Tab.Navigator>
    );
  }*/

// function AccionesHardwareScreen() {
//     return (
        
//         <Tab.Navigator initialRouteName='HistorialTab'>
//           <Tab.Screen name="HomeTab" component={HomeScreen} />
//           <Tab.Screen name="HistorialTab" component={HistorialScreen} />
//         </Tab.Navigator>
//     );
//   }

//export default AccionesHardwareScreen;

