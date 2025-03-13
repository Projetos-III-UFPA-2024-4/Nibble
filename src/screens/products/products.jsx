import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./products.style";
import { supermarket } from "../../constants/dados";
import icons from "../../constants/icons.js";

function Products() {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={supermarket.foto}
          style={styles.foto}
          resizeMode="container"
        />
      </View>
      <TouchableOpacity style={styles.containerBack}>
        <Image source={icons.back2} style={styles.back} />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.nome}>Nome do estabelecimento</Text>
          <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
        </View>

          <Image source={icons.favorito_full} style={styles.favorito}/>
      </View>
    </View>
  );
}

export default Products;
