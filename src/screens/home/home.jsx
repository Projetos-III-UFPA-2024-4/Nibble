import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./homes.style";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import icons from "../../constants/icons";
import { useFredokaFonts } from "../../assets/fonts/fontLoader";
import AppLoading from "expo-app-loading";
import TextBox from "../../components/textbox/textBox.jsx";
import { useState } from "react";

function Home() {
  const [busca, setBusca] = useState("");

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titulo}>ReFood</Text>
          </View>
          <Image source={icons.cart} style={styles.icon} />
        </View>

        <View style={styles.search}>
          <TextBox
            placeholder="O que vamos pedir hoje ?"
            onChangeText={(texto) => setBusca(texto)}
            value={busca}
          />
        </View>
        <View style={styles.categories}>
          <View style={styles.couple}>
            <TouchableOpacity>
              <Image style={styles.products} source={icons.fruits} />
            </TouchableOpacity>
            <Text>Frutas</Text>
          </View>
          <View style={styles.couple}>
            <Image style={styles.products} source={icons.drinks} />
            <Text>Bebidas</Text>
          </View>
          <View style={styles.couple}>
            <Image style={styles.products} source={icons.chips} />
            <Text>Embalados</Text>
          </View>
          <View style={styles.couple}>
            <Image style={styles.products} source={icons.fruits} />
            <Text>Frutas</Text>
          </View>
          <View style={styles.couple}>
            <Image style={styles.products} source={icons.drinks} />
            <Text>Bebidas</Text>
          </View>
          <View style={styles.couple}>
            <Image style={styles.products} source={icons.chips} />
            <Text>Embalados</Text>
          </View>
        </View>
        <View styles={styles.supermercados}>
          <Image source={icons.formosa}/>
          <Image source={icons.lider}/>
          <Image source={icons.atacadao}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Home;