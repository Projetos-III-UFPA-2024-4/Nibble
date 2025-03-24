// import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { styles } from "./categorias.style.js";

// function Categorias(props) {
//     return <View style={styles.container}>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             {
//                 props.dados.map((categoria, index) => {
//                     return <View key={index} style={styles.categoria}>
//                         <TouchableOpacity>
//                             <Image style={styles.icone} source={categoria.icone} />
//                             <Text style={styles.descricao}>{categoria.descricao}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 })
//             }
//         </ScrollView>
//     </View>
// }

// export default Categorias;

// ...existing code...
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias() {
  const [dados, setDados] = useState([]);

 // ...existing code...
// ...existing code...
useEffect(() => {
    fetch("https://4feb-2804-14c-59a4-8565-581d-2def-1f79-d4e8.ngrok-free.app/categorias", {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoyfQ.dUvC71hajsyH1xUorBZOBXdkxxaxVpsw7qagfy6MY3A"
      }
    })
      .then(response => response.json())
      .then(result => {
        setDados(result.data); // Aqui usamos somente o array 'data'
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Array.isArray(dados) && dados.map((categoria, index) => (
          <View key={index} style={styles.categoria}>
            <TouchableOpacity>
              <Image
                style={styles.icone}
                source={{ uri: categoria.icone }}
              />
              <Text style={styles.descricao}>
                {categoria.categoria}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
// ...existing code...