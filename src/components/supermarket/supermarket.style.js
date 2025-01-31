export const styles = {
    supermarket: {
      flexDirection: "row", // Para alinhar horizontalmente
      alignItems: "center",
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 10,
      elevation: 2, // Sombra para Android
      shadowColor: "#000", // Sombra para iOS
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    logoContainer: {
      width: 60, // Quadrado fixo
      height: 60,
      backgroundColor: "#f0f0f0", // Fundo para logotipos transparentes
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10, // Opcional, bordas arredondadas
      overflow: "hidden",
    },
    logotipo: {
      width: "100%",
      height: "100%",
      resizeMode: "contain", // Garante que o logo caiba no quadrado
    },
    infoContainer: {
      flex: 1, // Ocupa o espaço disponível
      marginLeft: 10,
    },
    nome: {
      fontSize: 16,
      fontWeight: "bold",
    },
    endereco: {
      fontSize: 14,
      color: "#666",
    },
    favorito: {
      width: 24,
      height: 24,
    },
  };
  
