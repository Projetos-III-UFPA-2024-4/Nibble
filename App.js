import { Text, View, Image } from "react-native";
import AppLoading from "expo-app-loading"; // Para exibir uma tela de carregamento enquanto as fontes estão sendo carregadas
import { styles } from "./style.js"; // Importando os estilos do arquivo styles.js
import icons from "./src/constants/icons.js";
import Button from "./src/components/button/button.jsx";
import { useFredokaFonts } from "./src/assets/fonts/fontLoader.js";

export default function App() {
  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imagens} source={icons.logo} />
      <Text style={styles.titulo}>ReFood</Text>
      <Button title="Entrar" />
    </View>
  );
}
