// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/app/IndexScreen';
import PortfolioInicialScreen from './components/PortfolioInicial';
import TatuagensScreen from './components/Tatuagens';
import PiercingsScreen from './components/Piercings';
import { Linking } from 'react-native';

const Stack = createStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Index">
<Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Início' }} />
<Stack.Screen name="PortfolioInicial" component={PortfolioInicialScreen} options={{ title: 'Portfólio' }} />
<Stack.Screen name="Tatuagens" component={TatuagensScreen} options={{ title: 'Tatuagens' }} />
<Stack.Screen name="Piercings" component={PiercingsScreen} options={{ title: 'Piercings' }} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;