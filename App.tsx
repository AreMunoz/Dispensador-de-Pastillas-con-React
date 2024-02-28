import React from 'react';
import Navigation from './Navigation';
import { useFonts } from 'expo-font';

const App: React.FC = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat/static/Montserrat-Light.ttf')
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <Navigation />;
};

export default App;



/**
 ["expo-font", {
        "fonts": ["./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"]
      }]
  
 */