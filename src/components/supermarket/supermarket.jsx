import { Text, Image, View, TouchableOpacity } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./supermarket.style";

function Supermarket(props) {
  return (
    <TouchableOpacity style={styles.supermarket}>
      <View style={styles.logoContainer}>
        <Image
          source={props.logotipo}
          style={styles.logotipo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.favorito} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default Supermarket;
