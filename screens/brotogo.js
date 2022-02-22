import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function Brotogo() {
  let [fontsLoaded] = useFonts({
    Poppins_900Black,

    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const url = "https://broducts.nl/products/bro-to-go-24pcs";

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/brotogo.png")} />
      <View>
        <Text style={styles.textUnder}>BRO-TO-GO</Text>
      </View>
      <View>
        <Text style={styles.price}>€9.99</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>SHOP NU</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 40,
  },
  price: {
    margin: 20,
    color: "white",
    fontSize: 20,
  },
  image: {
    marginTop: 60,
    height: 230,
    width: 260,
  },
  textUnder: {
    marginTop: 20,
    fontFamily: "Poppins_900Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF7200",
    padding: 20,
    borderRadius: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontWeight: "600",
    letterSpacing: 2,
  },
});
