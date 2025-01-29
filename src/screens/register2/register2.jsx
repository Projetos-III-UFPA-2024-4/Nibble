import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./register2.style.js";
import AppLoading from "expo-app-loading"; // Use SplashScreen se necessário
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import Header from "../../components/header/header.jsx";
import TextBoxLogin from "../../components/textboxlogin/textBoxLogin.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Register2(props) {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");

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
          <Button title="Criar minha conta" onPress={() => props.navigation.navigate("home")}/>
        </View>
      </View>

      {/* <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("login")}
        >
          <Text style={styles.footerText}>Acesse sua conta</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Register2;
