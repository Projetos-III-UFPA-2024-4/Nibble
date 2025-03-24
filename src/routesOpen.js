import Login from "./screens/login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register/register";
import Register2 from "./screens/register2/register2";
import AbaHome from "./screens/aba-home/aba-home";
import AbaFavorites from "./screens/aba-favorites/aba-favorites";
import AbaOrders from "./screens/aba-orders/aba-orders";
import AbaProfile from "./screens/aba-profile/aba-profile";

const Stack = createNativeStackNavigator();

function RoutesOpen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="orders"
          component={Orders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="favorites"
          component={Favorites}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            // headerShown: false
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
            headerStyle: {
              backgroundColor: "green", // Aqui você define a cor de fundo do header
            },
          }}
        />
        <Stack.Screen
          name="register2"
          component={Register2}
          options={{
            // headerShown: false
            title: "",
            headerShadowVisible: false,
            headerBackTitle: "Voltar",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesOpen;