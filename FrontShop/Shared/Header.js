import React from "react"
import { StyleSheet, Image, SafeAreaView, View} from "react-native";
import ViewPropTypes from 'deprecated-react-native-prop-types';


const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/mtics.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
  
});

export default Header;
