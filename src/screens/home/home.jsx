import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./homes.style";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { useFredokaFonts } from "../../assets/fonts/fontLoader";
import AppLoading from "expo-app-loading";
import TextBox from "../../components/textbox/textBox.jsx";

function Home() {

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titulo}>ReFood</Text>
          </View>
          <Image source={icons.cart} style={styles.icon} />
        </View>
        <View>
          <TextBox placeholder="O que vamos pedir hoje ?"/>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Home;
