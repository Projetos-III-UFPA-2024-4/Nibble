import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../../constants/icons";
import AbaHome from "../aba-home/aba-home";
import AbaFavorites from "../aba-favorites/aba-favorites";
import AbaOrders from "../aba-orders/aba-orders";
import AbaProfile from "../aba-profile/aba-profile";

const Tab = createBottomTabNavigator();

function Principal() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#78c129" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={AbaHome}
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
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={AbaFavorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icons.aba_favorites}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={AbaOrders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icons.aba_orders}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AbaProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icons.aba_profile}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Principal;
