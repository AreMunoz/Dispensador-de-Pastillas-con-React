import React from 'react';
import Navigation from './Navigation';
import { useFonts } from 'expo-font';

const App: React.FC = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const Text = (props: { style: any; }) => {
        return <Text {...props} style={[props.style, { fontFamily: 'Montserrat-Regular' }]} />;
    }

    return <Navigation />;
};

export default App;



/**
 ["expo-font", {
        "fonts": ["./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"]
      }]
  
 */