export const styles = {
  logotipo: {
    width: 90,
    height: 90,
    resizeMode: "contain", // Garante que o logo caiba no quadrado
    backgroundColor: "#f0f0f0", // Fundo para logotipos transparentes
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Opcional, bordas arredondadas
    overflow: "hidden",
  },
  order: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texts: {
    flex: 1,
    padding: 8,
  },
  value: {
    color: "#888",
  },
  status: {
    color: "green",
  },
};
