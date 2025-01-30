import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home/home.jsx";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
