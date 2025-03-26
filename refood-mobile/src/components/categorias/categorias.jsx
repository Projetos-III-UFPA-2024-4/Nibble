import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style.js";
import React, { useEffect, useState } from "react";

function Categorias() {
  const [dados, setDados] = useState([]);

 // ...existing code...
// ...existing code...
useEffect(() => {
  fetch(
    "https://bd23-13-217-86-176.ngrok-free.app/categorias",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoyfQ.dUvC71hajsyH1xUorBZOBXdkxxaxVpsw7qagfy6MY3A",
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      setDados(result.data); // Aqui usamos somente o array 'data'
    })
    .catch((error) => console.error(error));
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