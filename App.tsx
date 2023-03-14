import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PokemonProvider from './src/contexts/pokemonContext';
import Pokemon from './src/pages/Pokemon/pokemon';
import Home from './src/pages/home/home';
import Pokedex from './src/pages/pokedex/pokedex';
import {RootStackParamList} from './src/types/navigationTypes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <PokemonProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokedex" component={Pokedex} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </PokemonProvider>
    </NavigationContainer>
  );
}

export default App;
