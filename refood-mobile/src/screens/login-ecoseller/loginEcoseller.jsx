import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./loginEcoseller.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";
import SwitchSelector from "react-native-switch-selector";

function LoginEcoseller(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  function ProcessLogin() {
    console.log("Acessando ...");
  }

  const options = [
    { label: "ReFooder", value: "0" },
    { label: "EcoSeller", value: "1" },
  ];

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSwitch}>
        <SwitchSelector
          hasPadding={true}
          valuePadding={5}
          style={styles.switch}
          fontSize={15}
          buttonColor={"#78c129"}
          options={options}
          initial={1}
          borderWidth={2}
          borderColor={"black"}
          onPress={(value) => {
            if (value == 0) {
              props.navigation.navigate("login");
            }
          }}
        />
      </View>

      <Header texto="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBoxLogin placeholder="CNPJ" />
        </View>

        <View style={styles.form}>
          <TextBoxLogin placeholder="Senha" isPassword={true} />
        </View>

        <View style={styles.form}>
          <Button title="Entrar" onPress={ProcessLogin} type={1} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <View style={styles.footerLinkContainer}>
          <Text>Não possui uma conta? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("register-ecoseller")}
          >
            <Text style={styles.footerText1}>Crie agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginEcoseller;
