import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./aba-homes.style.js";
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
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { supermarkets } from "../../constants/dados.js";
import Supermarket from "../../components/supermarket/supermarket.jsx";
import api from "../../constants/api.js";

function AbaHome(props) {

  function OpenProducts(){
    props.navigation.navigate("products")
  }
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
        <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
        <Image source={icons.cart} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextBox
          placeholder="O que vamos pedir hoje ?"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <Categorias dados={categorias} />

        {supermarkets.map((supermarket, index) => {
          return (
            <View key={index}>
              <TouchableOpacity>
              <Supermarket
                logotipo={supermarket.logotipo}
                nome={supermarket.nome}
                endereco={supermarket.endereco}
                icone={icons.favorito_full2}
                onPress={OpenProducts}
              />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default AbaHome;