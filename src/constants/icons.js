// import logo from "../assets/images/logo.png";
// import cart from "../assets/images/cart.png";
// import atacadao from "../assets/images/atacadao.png";
// import fruits from "../assets/images/fruits.png";
// import lider from "../assets/images/lider.png";
// import drinks from "../assets/images/drinks.png";
// import chips from "../assets/images/chips.png";
// import formosa from "../assets/images/formosa.png";
// import aba_favorito from "../assets/images/aba-favorito.png";
// import aba_home from "../assets/images/aba-home.png";
// import aba_pedidos from "../assets/images/aba-pedidos.png";
// import aba_perfil from "../assets/images/aba-perfil.png";
// import endereco from "../assets/images/endereco.png";
// import favorito_full from "../assets/images/favorito-full.png";
// import favorito_full2 from "../assets/images/favorito-full2.png";
// import favorito from "../assets/images/favorito.png";
// import deletar from "../assets/images/deletar.png";
// import empty from "../assets/images/empty.png";
// import my_data from "../assets/images/my_data.png";
// import logout from "../assets/images/logout.png";

// export default {
//   logo,
//   cart,
//   atacadao,
//   fruits,
//   lider,
//   drinks,
//   chips,
//   formosa,
//   aba_favorito,
//   aba_home,
//   aba_pedidos,
//   aba_perfil,
//   endereco,
//   favorito,
//   favorito_full,
//   favorito_full2,
//   deletar,
//   empty,
//   my_data,
//   logout,
// };

const images = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);

const icons = images.keys().reduce((acc, file) => {
  const fileName = file.replace("./", "").replace(/\.(png|jpe?g|svg)$/, ""); 
  acc[fileName] = images(file);
  return acc;
}, {});

export default icons;



