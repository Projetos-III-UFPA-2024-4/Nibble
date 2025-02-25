import { TextInput, View } from "react-native";
import { styles } from "./textBoxLogin.style.js";

function TextBoxLogin(props) {
  return (
    <View style={styles.input}>
      <TextInput
        style={{ flex: 1 }}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
}

export default TextBoxLogin;
