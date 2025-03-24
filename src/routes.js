import Login from "./screens/login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register/register";
import Register2 from "./screens/register2/register2";
import LoginEcoseller from "./screens/login-ecoseller/loginEcoseller";
import RegisterEcoseller from "./screens/register-ecoseller/registerEcoseller";
import Register2Ecoseller from "./screens/register2-ecoseller/register2Ecoseller";
import RoutesOpen from "./routesOpen.js";
import RoutesAuth from "./routesAuth.js";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth.js";

function Routes(){

    const {user} = useContext(AuthContext);

    return  user.id_usuario ? <RoutesAuth /> : <RoutesOpen />
}

export default Routes;