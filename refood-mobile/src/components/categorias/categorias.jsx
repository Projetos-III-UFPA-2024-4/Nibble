import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(
      "https://a3a9-3-81-110-4.ngrok-free.app",
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
        {Array.isArray(dados) &&
          dados.map((categoria, index) => (
            <View key={index} style={styles.categoria}>
              <TouchableOpacity>
                <Image style={styles.icone} source={{ uri: categoria.icone }} />
                <Text style={styles.descricao}>{categoria.categoria}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

export default Categorias;
// ...existing code...
