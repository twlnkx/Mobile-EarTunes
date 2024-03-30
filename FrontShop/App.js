import React from "react";
import { StatusBar } from 'expo-status-bar';
import {LogBox} from 'react-native';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//Navigators
import Main from "./Navigators/Main";
LogBox.ignoreAllLogs(true);
//Screens
import Header from './Shared/Header'
import ProductContainer from './Screens/Products/ProductContainer'
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Header />
        <Main />
    </NavigationContainer>
    </Provider>
    
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
