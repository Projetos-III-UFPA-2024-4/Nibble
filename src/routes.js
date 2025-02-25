import Login from "./screens/login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register/register";
import Register2 from "./screens/register2/register2";
import Search from "./screens/search/search";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={Search}
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

export default Routes;
