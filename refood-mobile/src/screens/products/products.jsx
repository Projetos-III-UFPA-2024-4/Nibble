import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./products.style";
import { supermarket } from "../../constants/dados";
import icons from "../../constants/icons.js";
import Product from "../../components/product/product.jsx";

function Products(props) {
  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.containerFoto}>
        <Image
          source={supermarket.foto}
          style={styles.foto}
          resizeMode="container"
        />
      </View>
      <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
        <Image source={icons.back2} style={styles.back} />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.nome}>Nome do estabelecimento</Text>
          <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
        </View>
        <Image source={icons.favorito_full} style={styles.favorito} />
      </View>

      <View style={styles.location}>
        <Image source={icons.location} style={styles.locationImg} />
        <Text style={styles.endereco}>Avenida Senador Lemos, 2842</Text>
      </View>
        {supermarket.produtos.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containerProduto}>
              <Text style={styles.categoria}>{item.categoria}</Text>

              {item.itens.map((prod) => {
                return (
                  <Product
                    key={prod.idProduto}
                    idProduto={prod.idProduto}
                    foto={prod.foto}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    valor={prod.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Products;
