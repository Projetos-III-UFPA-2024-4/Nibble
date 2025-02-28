import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";
// import { View } from "react-native";
// import Login from "./src/screens/login/login.jsx";
// import Register from "./src/screens/register/register.jsx";
// import Register2 from "./src/screens/register2/register2.jsx";

const isUserAuth = true;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />;
}
