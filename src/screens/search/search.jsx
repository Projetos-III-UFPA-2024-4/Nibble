import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./search.style.js";
import { supermarkets } from "../../constants/dados.js";
import Supermarket from "../../components/supermarket/supermarket.jsx";
import icons from "../../constants/icons.js";

function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da busca</Text>
      <FlatList
        data={supermarkets}
        keyExtractor={(supermarkets) => supermarkets.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Supermarket
              nome={item.nome}
              endereco={item.endereco}
              logotipo={item.logotipo}
              icone={icons.favorito_full}
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum favorito adicionado</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Search;
