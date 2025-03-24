import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./homes.style";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import icons from "../../constants/icons";
import { useFredokaFonts } from "../../assets/fonts/fontLoader";
import AppLoading from "expo-app-loading";
import TextBox from "../../components/textbox/textBox.jsx";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { supermarkets } from "../../constants/dados.js";
import Supermarket from "../../components/supermarket/supermarket.jsx";
import api from "../../constants/api.js";

const Tab = createBottomTabNavigator();

function Home() {

  async function LoadCategory() {
    try {
      setLoading(true);
      const response = await api.get("/categorias");

      if(response.data){

      }
    } catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }

  const [busca, setBusca] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    LoadCategory();
  }, []);

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
        <Image source={icons.cart} style={styles.icon} />
      </View>

      <View style={styles.search}>
        <TextBox
          placeholder="O que vamos pedir hoje ?"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categories}>
          <View style={styles.couple}>
            <TouchableOpacity>
              <Image style={styles.products} source={icons.fruits} />
            </TouchableOpacity>
            <Text>Frutas</Text>
          </View>
          <View style={styles.couple}>
            <TouchableOpacity>
              <Image style={styles.products} source={icons.drinks} />
            </TouchableOpacity>
            <Text>Bebidas</Text>
          </View>
          <View style={styles.couple}>
            <TouchableOpacity>
              <Image style={styles.products} source={icons.chips} />
            </TouchableOpacity>
            <Text>Embalados</Text>
          </View>
        </View>

        {supermarkets.map((supermarket, index) => {
          return (
            <View key={index}>
              <Supermarket
                logotipo={supermarket.logotipo}
                nome={supermarket.nome}
                endereco={supermarket.endereco}
                icone={icons.favorito_full2}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;