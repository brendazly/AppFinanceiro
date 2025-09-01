import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Financiamento from './views/Financiamento';
import Investimento from './views/Investimento';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Financiamento: Financiamento,
    Investimento: Investimento

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}