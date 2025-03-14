import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./aba-profile.style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import AppLoading from "expo-app-loading";
import icons from "../../constants/icons.js";

function AbaProfile() {
  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>

      <TouchableOpacity style={[styles.item,styles.borderTop]}>
        <View style={styles.containerIcon}>
          <Image source={icons.endereco} style={styles.icon} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title2}>Endereço</Text>
          <Text style={styles.subtitle}>Meu endereço de entrega</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcon}>
          <Image source={icons.my_data} style={styles.icon} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title2}>Meus dados</Text>
          <Text style={styles.subtitle}>Informações da minha conta</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcon}>
          <Image source={icons.logout} style={styles.icon} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title2}>Desconectar</Text>
          <Text style={styles.subtitle}>Desconectar seu usuário deste aparelho</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AbaProfile;
