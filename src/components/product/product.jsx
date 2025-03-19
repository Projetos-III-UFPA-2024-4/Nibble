import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./product.style.js";
import icons from "../../constants/icons.js";

function Product(props) {
  return (
    <TouchableOpacity style={styles.produto}>
      <Image source={props.foto} style={styles.foto} />

      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>

      <View >
        <Text style={styles.valor}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.valor)}
        </Text>

        {
                props.onClickDelete &&
                <TouchableOpacity style={styles.containerDelete}
                    onPress={() => props.onClickDelete()}>
                    <Image source={icons.deletar} style={styles.delete} />
                </TouchableOpacity>
            }

      </View>
    </TouchableOpacity>
  

);
}

export default Product;
