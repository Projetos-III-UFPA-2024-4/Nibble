import { Image, View, Text } from "react-native";
import { styles } from "./order.style";

function Order(props) {
  return (
    <View style={styles.order}>
      <Image source={props.logotipo} style={styles.logotipo} />

      <View style={styles.texts}>
        <Text style={styles.nome}>{props.nome}</Text>

        <View style={styles.valueContainer}>
          <Text style={styles.value}>{new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(props.value)}</Text>
          <Text style={styles.value}>{props.date_order}</Text>
        </View>
        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
}

export default Order;
