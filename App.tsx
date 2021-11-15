import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Home';
import { Image } from './src/Image';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Image" component={Image} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;