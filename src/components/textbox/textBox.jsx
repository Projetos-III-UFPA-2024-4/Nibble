import { View, TextInput } from "react-native";
import { styles } from "./textBox.js";

function TextBox(props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
}

export default TextBox;
