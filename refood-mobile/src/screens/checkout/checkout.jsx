import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Product from "../../components/product/product.jsx";
import Button from "../../components/button/button.jsx";

function Checkout(props) {
  function ClickDelete() {
    alert("ok");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Product
              key={item.idItem}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              valor={item.vlTotal}
              onClickDelete={ClickDelete}
            />
          );
        }}
      />

      <View>
        <View style={styles.valores}>
          <Text style={styles.total}>Resumo dos Valores</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.valor}>Subtotal</Text>
          <Text style={styles.valor}>R$ 66,00</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.valor}>Taxa de entrega</Text>
          <Text style={styles.valor}>R$ 5,00</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ 71,00</Text>
        </View>
      </View>

      <View style={styles.conatinerBtn}>
        <Button title="Finalizar Pedido" type={2}/>
      </View>
    </View>
  );
}

export default Checkout;
