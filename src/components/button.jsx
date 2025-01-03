import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.texto}>{props.title}</Text>
    </TouchableOpacity>
  );
}
export default Button;
