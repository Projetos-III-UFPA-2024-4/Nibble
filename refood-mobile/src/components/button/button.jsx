import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {
    if (props.type == 1) {
        return (
          <TouchableOpacity style={[styles.btn1, props.isLoading ? styles.loading : ""]} disabled={props.isLoading} onPress={props.onPress}>
          {
            props.isLoading ? < ActivityIndicator color={styles.loadingColor} /> :
            <Text style={styles.texto1}>{props.title}</Text>
          
          }
        </TouchableOpacity>
        );
    }
  
    if (props.type == 2) {
        return (
          <TouchableOpacity style={[styles.btn2, props.isLoading ? styles.loading : ""]} disabled={props.isLoading} onPress={props.onPress}>
          {
            props.isLoading ? < ActivityIndicator color={styles.loadingColor} /> :
            <Text style={styles.texto2}>{props.title}</Text>
          
          }
        </TouchableOpacity>
        );
    }
    return null;
}

export default Button;
