import { View } from "react-native";
import { styles } from "./login.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textBox.jsx";
import { useState } from "react";
import Button from "../../components/button/button.jsx";

function Login() {
  const [text, setText] = useState(""); // Gerencia o estado do texto

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header texto="ReFood" />
      <TextBox placeholder = "Usuário"/>
      <TextBox placeholder = "Senha"/>
      <Button title="Entrar" />
    </View>
  );
}

export default Login;
