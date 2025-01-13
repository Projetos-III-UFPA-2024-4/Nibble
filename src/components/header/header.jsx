import { Text, Image, View } from "react-native";
import { styles } from "./header.style";
import icons from "../../constants/icons";

function Header(props) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={icons.logo}/>
      <Text style={styles.titulo}>{props.texto}</Text>
    </View>
  );
}

export default Header;
