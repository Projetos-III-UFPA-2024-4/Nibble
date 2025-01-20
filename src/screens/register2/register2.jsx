import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./register2.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textBox.jsx";
import Button from "../../components/button/button.jsx";
// import Icon from "react-native-vector-icons/MaterialIcons"; // Altere o nome do pacote conforme o ícone desejado

function Register2() {
  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header texto="Crie sua conta" />
      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox placeholder="Nome Completo" />
        </View>

        <View style={styles.form}>
          <TextBox placeholder="Celular" />
        </View>

        <View style={styles.form}>
          <TextBox placeholder="Escolha uma senha" isPassword={true}/>
        </View>

        <View style={styles.form}>
          <TextBox placeholder="Confirme a senha" isPassword={true}/>
        </View>

        <View style={styles.form}>
          <Button title="Próximo passo " />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log("Redirecionar para acesso de conta")}>
          <Text style={styles.footerText}>Acesse sua conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register2;
