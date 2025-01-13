import { Text, TextInput } from "react-native";
import { styles } from "./textBox.style.js";

function TextBox(props) {
  return (
    <>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </>
  );
}

export default TextBox;
