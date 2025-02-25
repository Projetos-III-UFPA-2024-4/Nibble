import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home/home.jsx";
import Favorites from "./screens/favorites/favorites.jsx";
import Orders from "./screens/orders/orders.jsx";
import Profile from "./screens/profile/profile.jsx";
import { Image, View } from "react-native";
import icons from "./constants/icons.js";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#78c129" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.aba_home}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 8,
                    opacity: focused ? 1 : 0.3
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={icons.aba_favorites}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 8,
                    opacity: focused ? 1 : 0.3
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={icons.aba_orders}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 8,
                    opacity: focused ? 1 : 0.3
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={icons.aba_profile}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 8,
                    opacity: focused ? 1 : 0.3
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
