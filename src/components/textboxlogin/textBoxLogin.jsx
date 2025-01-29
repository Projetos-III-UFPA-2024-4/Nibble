import { TextInput, View } from "react-native";
import { styles } from "./textBoxLogin.style.js";
import { MaterialIcons } from "@expo/vector-icons"; // Substitua pelo pacote que preferir

function TextBoxLogin(props) {
  return (
    <View style={styles.input}>
      props.iconName && <MaterialIcons name={props.iconName} size={24} color="black" />
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
}

export default TextBoxLogin;
