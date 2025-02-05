import { FlatList, Image, Text, View } from "react-native";
import { supermarkets } from "../../constants/dados";
import Supermarket from "../../components/supermarket/supermarket";
import icons from "../../constants/icons";
import Header from "../../components/header/header";
import { styles } from "./favorites.style";
import { SafeAreaView } from "react-native-safe-area-context";

function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.title}>Favoritos</Text>
      </View>
      <FlatList
        data={supermarkets}
        keyExtractor={(supermarkets) => supermarkets.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Supermarket nome={item.nome} endereco={item.endereco} logotipo={item.logotipo} icone={icons.deletar} />;
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

export default Favorites;
