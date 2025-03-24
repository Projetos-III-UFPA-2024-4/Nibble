import { View, SectionList } from "react-native";
import { styles } from "./registerEcoseller.style.js";
import AppLoading from "expo-app-loading";
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function RegisterEcoseller(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header texto="Crie sua conta" />
      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBoxLogin
            placeholder="Nome da empresa"
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />
        </View>

        <View style={styles.form}>
          <TextBoxLogin
            placeholder="CNPJ"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
        </View>

        <View style={styles.form}>
          <TextBoxLogin
            placeholder="Escolha uma senha"
            isPassword={true}
            onChangeText={(texto) => setPassword1(texto)}
            value={password1}
          />
        </View>

        <View style={styles.form}>
          <TextBoxLogin
            placeholder="Confirme a senha"
            isPassword={true}
            onChangeText={(texto) => setPassword2(texto)}
            value={password2}
          />
        </View>
        <View style={styles.form}>
          <Button
            title="Próximo passo"
            onPress={() => props.navigation.navigate("register2-ecoseller")}
            type={1}
          />
        </View>
      </View>

      {/* <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
          <Text style={styles.footerText}>Acesse sua conta</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
export default RegisterEcoseller;
