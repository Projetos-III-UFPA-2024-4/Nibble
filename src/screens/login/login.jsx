import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  function ProcessLogin() {
    console.log("Acessando ...");
  }

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header texto="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBoxLogin placeholder="E-mail"/>
        </View>

        <View style={styles.form}>
          <TextBoxLogin placeholder="Senha" isPassword={true} />
        </View>

        <View style={styles.form}>
          <Button title="Entrar" onPress={ProcessLogin} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <View style={styles.footerLinkContainer}>
          <Text>Não possui uma conta? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("register")}
          >
            <Text style={styles.footerText1}>Crie agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
