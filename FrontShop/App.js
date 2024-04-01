import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Navigatiors
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
