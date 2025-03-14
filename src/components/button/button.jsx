import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    if (props.type == 1) {
        return (
            <TouchableOpacity style={styles.btn1} onPress={props.onPress}>
                <Text style={styles.texto1}>{props.title}</Text>
            </TouchableOpacity>
        );
    }
  
    if (props.type == 2) {
        return (
            <TouchableOpacity style={styles.btn2} onPress={props.onPress}>
                <Text style={styles.texto2}>{props.title}</Text>
            </TouchableOpacity>
        );
    }

    // Caso não seja tipo 1 ou 2, retorne null ou algum outro comportamento desejado
    return null;
}

export default Button;
