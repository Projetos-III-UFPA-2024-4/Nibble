import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./aba-homes-ecoseller.style.js";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import icons from "../../constants/icons.js";
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import AppLoading from "expo-app-loading";
import TextBox from "../../components/textbox/textBox.jsx";
import { useState } from "react";
import { supermarkets } from "../../constants/dados.js";
import Supermarket from "../../components/supermarket/supermarket.jsx";
import Categorias from "../../components/categorias/categorias.jsx";
import { categorias } from "../../constants/dados.js";

function AbaHomeEcoseller(props) {
  function OpenProducts() {
    props.navigation.navigate("products");
  }

  const [busca, setBusca] = useState("");

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo}>ReFood</Text>
        </View>
        <TouchableOpacity onPress={() => alert("Adicionar produtos!")}>
          <Image source={icons.mais} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      </ScrollView>
    </SafeAreaView>
  );
}
export default AbaHomeEcoseller;
