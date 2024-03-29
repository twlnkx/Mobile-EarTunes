import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, View, Text} from 'react-native';
import ViewPropTypes from 'deprecated-react-native-prop-types';


//LogBox.ignoreAllLogs(true);
//Screens
import Header from './Shared/Header'
import ProductContainer from './Screens/Products/ProductContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
