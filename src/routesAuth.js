import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal.jsx";
import Products from "./screens/products/products.jsx";
import Search from "./screens/search/search.jsx";
import DetalheProduto from "./screens/detalhe-produto/detalheProduto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhePedido.jsx";
import Checkout from "./screens/checkout/checkout.jsx";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{
            headerShadowVisible: false,
            title: "Meu pedido",
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => alert("ok")}>
                  <Text style={{ color: "red" }}>Limpar</Text>
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="detalhe-pedido"
          component={DetalhePedido}
          options={{
            headerShadowVisible: false,
            title: "Detalhes do Pedido",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="detalhe-produto"
          component={DetalheProduto}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
