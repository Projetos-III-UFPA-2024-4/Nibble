import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home/home.jsx";
import Favorites from "./screens/favorites/favorites.jsx";
import Orders from "./screens/orders/orders.jsx";
import Profile from "./screens/profile/profile.jsx";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={Home} />   
        <Tab.Screen name = "Favorites" component={Favorites} />   
        <Tab.Screen name = "Orders" component={Orders} />   
        <Tab.Screen name = "Profile" component={Profile} />   
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;