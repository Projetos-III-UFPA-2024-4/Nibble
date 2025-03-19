import { FlatList, Image, Text, View } from "react-native";
import { pedidos } from "../../constants/dados.js";
import Order from "../../components/order/order.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./aba-orders.style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFredokaFonts } from "../../assets/fonts/fontLoader.js";
import AppLoading from "expo-app-loading";

function AbaOrders(props) {

  function DetalhePedido(){
    props.navigation.navigate("detalhe-pedido")
  }
  const fontsLoaded = useFredokaFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(supermarkets) => supermarkets.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Order
              logotipo={item.logotipo}
              nome={item.nome}
              value={item.vl_total}
              date_order={item.dt_pedido}
              status={item.status}
              onClickPedido={DetalhePedido}
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum favorito adicionado</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default AbaOrders;
