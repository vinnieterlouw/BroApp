import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Brotogo from "./screens/brotogo";
import Duopack from "./screens/duopack";
import Familypack from "./screens/familypack";
import Multipack from "./screens/multipack";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_900Black,

    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const url = "https://broducts.nl/collections/all";
  const url1 = "https://www.instagram.com/broductsnl/";
  const url2 = "https://twitter.com/Broductsnl";
  const url3 = "https://www.linkedin.com/company/broducts/";
  const url4 = "https://www.facebook.com/broductsnl";

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.headerImage}
          source={require("./images/broducts.png")}
        />
        <View>
          <Image
            style={styles.bannerImage}
            source={require("./images/header.png")}
          />
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>SHOP JOUW BROWIPES</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.meetYour}>MEET YOUR</Text>
        <Text style={styles.selfcare}>SELFCARE HERO's</Text>
        <ScrollView horizontal={true}>
          <Multipack />
          <Brotogo />
          <Duopack />
          <Familypack />
        </ScrollView>
        <View style={styles.card1}>
          <Text style={styles.card11}>Flushable Ass Wipes For Men</Text>
          <Text style={styles.card111}>
            Iedereen wil fris voor de dag komen. No shit. Broducts maakt het je
            makkelijk met easy to use wipes die je na gebruik zo doorspoelt. Een
            uh, ware ontlasting voor in het kleinste kamertje. Handig mee te
            nemen onderweg, of in grootverpakking voor op het toilet. Zo ga je
            pas echt relaxed de pot op.
          </Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.card22}>Betaal veilig met</Text>
        </View>
        <ScrollView horizontal={true} style={styles.payment}>
          <Image
            style={styles.paymentImage}
            source={require("./images/ideal.png")}
          />
          <Image
            style={styles.paymentImage}
            source={require("./images/applepay.png")}
          />
          <Image
            style={styles.paymentImage}
            source={require("./images/paypal.png")}
          />
          <Image
            style={styles.paymentImage}
            source={require("./images/googlepay.png")}
          />
          <Image
            style={styles.paymentImage}
            source={require("./images/shoppay.png")}
          />
        </ScrollView>
      </View>
      <View style={styles.card3}>
        <Text style={styles.card33}>Volg ons op social media</Text>
        <View style={styles.card333}>
          <View style={styles.card3333}>
            <TouchableOpacity
              onPress={() =>
                Linking.canOpenURL(url1).then(() => {
                  Linking.openURL(url1);
                })
              }
            >
              <Image
                style={styles.socialImage}
                source={require("./images/insta.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.canOpenURL(url2).then(() => {
                  Linking.openURL(url2);
                })
              }
            >
              <Image
                style={styles.socialImage}
                source={require("./images/twitter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.canOpenURL(url3).then(() => {
                  Linking.openURL(url3);
                })
              }
            >
              <Image
                style={styles.socialImage}
                source={require("./images/linkedin.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.canOpenURL(url4).then(() => {
                  Linking.openURL(url4);
                })
              }
            >
              <Image
                style={styles.socialImage}
                source={require("./images/facebook.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerImage: {
    marginTop: 70,

    height: 60,
    width: 300,
  },
  bannerImage: {
    marginTop: 60,
    height: 400,
    width: 440,
  },
  button: {
    backgroundColor: "#FF7200",
    height: 40,
    width: 440,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontWeight: "600",
    letterSpacing: 2,
  },
  meetYour: {
    margin: 20,
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontWeight: "600",
    letterSpacing: 2,
  },
  selfcare: {
    color: "white",
    fontFamily: "Poppins_900Black",
    fontWeight: "600",
    fontSize: 40,
    letterSpacing: 2,
  },
  card1: {
    backgroundColor: "white",
  },
  card11: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    color: "#282828",
    fontFamily: "Poppins_900Black",
    fontWeight: "600",
    fontSize: 40,
    letterSpacing: 2,
  },
  card111: {
    margin: 20,
    color: "#282828",
    fontFamily: "Poppins_500Medium",
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 2,
  },
  card2: {
    backgroundColor: "#008DFF",
  },
  card22: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
    marginTop: 20,
    width: 430,
    height: 80,
    color: "white",
    fontFamily: "Poppins_900Black",
    fontWeight: "600",
    fontSize: 35,
    letterSpacing: 2,
  },
  card3: {
    backgroundColor: "#fff",
    height: 200,
  },
  card33: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 20,
    width: 430,
    height: 70,
    color: "black",
    fontFamily: "Poppins_500Medium",
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 2,
  },
  card333: {
    justifyContent: "center",
    alignItems: "center",

    width: 430,
    height: 80,
  },
  card3333: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 430,
    height: 80,
  },
  payment: {
    backgroundColor: "white",
    width: 430,
  },
  paymentImage: {
    width: 170,
    height: 170,
  },
  socialImage: {
    margin: 10,
    width: 70,
    height: 70,
  },
});
