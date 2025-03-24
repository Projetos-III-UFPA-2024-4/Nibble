import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import SwitchSelector from "react-native-switch-selector";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario, LoadUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Alterado de senha para password
  const [loading, setLoading] = useState(false);

  const {user, setUser} = useContext(AuthContext);

  async function ProcessLogin() {
    try {
      setLoading(true);
      const response = await api.post("/usuarios/login", { email, senha: password });

      if(response.data){
        api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
        await SaveUsuario(response.data);
        setUser(response.data);
      }
    } catch (error) {
      setLoading(false);
      await SaveUsuario({});
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }

  const options = [
    { label: "ReFooder", value: "0" },
    { label: "EcoSeller", value: "1" },
  ];
  async function CarregarDados() {
    try {
      const usuario = await LoadUsuario();
      if(usuario.token){
        api.defaults.headers.common['Authorization'] = "Bearer " + usuario.token;
        setUser(usuario);
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    CarregarDados();
  }, []);

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
          initial={0}
          borderWidth={2}
          borderColor={"black"}
          onPress={(value) => {
            if (value == 1) {
              props.navigation.navigate("login-ecoseller");
            }
          }}
        />
      </View>

      <Header texto="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBoxLogin placeholder="E-mail"
            onChangeText={(texto) => setEmail(texto)}
            value={email} />
        </View>

        <View style={styles.form}>
          <TextBoxLogin placeholder="Senha" isPassword={true}
            onChangeText={(texto) => setPassword(texto)}
            value={password} />
        </View>

        <View style={styles.form}>
          <Button title="Entrar" onPress={ProcessLogin} isLoading={loading} type={1}/>
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
