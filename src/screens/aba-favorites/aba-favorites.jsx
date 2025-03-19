import { FlatList, Image, Text, View } from "react-native";
import { supermarkets } from "../../constants/dados";
import Supermarket from "../../components/supermarket/supermarket";
import icons from "../../constants/icons";
import { styles } from "./aba-favorites.style.js";
import { SafeAreaView } from "react-native-safe-area-context";

function AbaFavorites(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <FlatList
        data={supermarkets}
        keyExtractor={(supermarkets) => supermarkets.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Supermarket nome={item.nome} endereco={item.endereco} logotipo={item.logotipo} icone={icons.favorito_full2}/>;
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return <View style={styles.empty}>
            <Image source={icons.empty}/>
            <Text style={styles.emptyText}>Nenhum favorito adicionado</Text>
          </View>
        }}
      />
    </SafeAreaView>
  );
}

export default AbaFavorites;
