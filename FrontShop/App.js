import React from "react";
import { StatusBar } from 'expo-status-bar';
import {LogBox} from 'react-native';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";


LogBox.ignoreAllLogs(true);
//Screens
import Header from './Shared/Header'
import ProductContainer from './Screens/Products/ProductContainer'

export default function App() {
  return (
    <NavigationContainer>
        <Header />
        <Main />
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
