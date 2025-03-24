import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./register2.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

function Register2(props) {

  const nome = props.route.params.nome;
  const email = props.route.params.email;
  const senha = props.route.params.senha;

  const {user, setUser} = useContext(AuthContext);

  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);

  async function ProcessNewAccount() {
    console.log(nome, email, senha, address, district, city, state, cep);
    try {
      setLoading(true);
      const response = await api.post("/usuarios", { 
        nome,
        email,
        senha,
        endereco: address,
        numero: number,
        bairro: district,
        cidade: city,
        uf: state,
        cep
      });
      if(response.data){
        api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
        await SaveUsuario(response.data);
        setUser(response.data);
      }
    } catch (error) {
      setLoading(false);
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }
  
  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header texto="Informe seu endereço" />
      <View style={styles.formGroup}>
        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBoxLogin
              placeholder="Endereço"
              onChangeText={(texto) => setAddress(texto)}
              value={address}
            />
          </View>
          <View style={styles.form30}>
            <TextBoxLogin
              placeholder="Num."
              onChangeText={(texto) => setNumber(texto)}
              value={number}
            />
          </View>
        </View>
        <View style={styles.form}>
          <TextBoxLogin
            placeholder="Bairro"
            onChangeText={(texto) => setDistrict(texto)}
            value={district}
          />
        </View>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBoxLogin
              placeholder="Cidade"
              onChangeText={(texto) => setCity(texto)}
              value={city}
            />
          </View>
          <View style={styles.form30}>
            <TextBoxLogin
              placeholder="UF"
              onChangeText={(texto) => setState(texto)}
              value={state}
            />
          </View>
        </View>

        <View style={styles.form}>
          <TextBoxLogin
            placeholder="CEP"
            onChangeText={(texto) => setCep(texto)}
            value={cep}
          />
        </View>

        <View style={styles.form}>
          <Button title="Criar minha conta" onPress={ProcessNewAccount} isLoading={loading} type={1}/>
        </View>
      </View>

    </View>
  );
}

export default Register2;
