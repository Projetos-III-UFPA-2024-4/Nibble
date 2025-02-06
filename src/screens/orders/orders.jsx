import { FlatList, Image, Text, View } from "react-native";
import { pedidos } from "../../constants/dados.js";
import Order from "../../components/order/order.jsx";
import icons from "../../constants/icons.js";
// import Header from "../../components/header/header";
import { styles } from "./orders.style.js";
import { SafeAreaView } from "react-native-safe-area-context";

function Orders() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pedidos</Text>
      </View>
      <FlatList
        data={pedidos}
        keyExtractor={(supermarkets) => supermarkets.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Pedido />;
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

export default Orders;
