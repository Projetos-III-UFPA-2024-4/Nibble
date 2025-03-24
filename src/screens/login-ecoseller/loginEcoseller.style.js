export const styles = {
  container: {
    flex: 1, // Faz com que o container ocupe toda a altura disponível
    justifyContent: "center", // Centraliza os elementos verticalmente
    alignItems: "center", // Centraliza os elementos horizontalmente
    backgroundColor: "green", // Define o fundo como verde
  },
  containerSwitch: {
    top: -110, // Distância do topo
    right: -85, // Distância da direita
    zIndex: 10, // Garante que fique sobre outros elementos
  },
  switch: {
    width: "50%",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
  },
  formGroup: {
    width: "100%",
    marginTop: 20,
  },

  footer: {
    width: "100%",
    marginBottom: 10,
  },
  footerText: {
    color: "white",
    textAlign: "right",
    marginRight: 60,
  },
  footerText1: {
    color: "white",
  },

  footerLinkContainer: {
    flexDirection: "row", // Organiza lado a lado
    justifyContent: "center", // Centraliza horizontalmente
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
};
