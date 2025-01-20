import { TextInput } from "react-native";
import { styles } from "./textBox.style.js";


function TextBox(props) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </>
  );
}

export default TextBox;
