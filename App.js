import { Text, View, Image } from "react-native";
import AppLoading from "expo-app-loading"; // Para exibir uma tela de carregamento enquanto as fontes estão sendo carregadas
import { useFonts } from "expo-font";
import {styles} from "./style.js"; // Importando os estilos do arquivo styles.js
import icons from "./src/constants/icons.js";
import Button from "./src/components/button.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Fredoka-Bold": require("./src/assets/fonts/Fredoka-Bold.ttf"),
    "Fredoka-Light": require("./src/assets/fonts/Fredoka-Light.ttf"),
    "Fredoka-Medium": require("./src/assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-Regular": require("./src/assets/fonts/Fredoka-Regular.ttf"),
    "Fredoka-SemiBold": require("./src/assets/fonts/Fredoka-SemiBold.ttf"),
  });

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
