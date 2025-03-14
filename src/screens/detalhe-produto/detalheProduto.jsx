import { SafeAreaView } from "react-native-safe-area-context";
import { Image, TouchableOpacity, View, Text, TextInput, TouchableOpacityBase } from "react-native";
import { styles } from "./detalheProduto.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";

function DetalheProduto(props) {
    return <SafeAreaView style={styles.container}>
        <View style={styles.containerFoto}>
            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>Pizza Calabresa</Text>
                <Text style={styles.descricao}>Massa artesanal, mussarela e calabresa.
                    Serve de 3 a 4 pessoas. Molho e tomate 100% natural
                    e ingredientes selecionados.</Text>
                <Text style={styles.valor}>R$ 30,00</Text>
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={icons.menos} style={styles.imgQtd} />
            </TouchableOpacity>

            <Text style={styles.qtd}>1</Text>

            <TouchableOpacity>
                <Image source={icons.mais} style={styles.imgQtd} />
            </TouchableOpacity>

            <View style={styles.footerBtn}>
                <Button title="Inserir" type={2}/>
            </View>
        </View>

    </SafeAreaView>
}

export default DetalheProduto;