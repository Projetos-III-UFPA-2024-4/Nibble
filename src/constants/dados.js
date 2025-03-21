export const categorias = [
  {
    id: 1,
    descricao: "Laticínios",
    icone: require("../assets/images/laticinios.png"),
  },
  {
    id: 2,
    descricao: "Congelados",
    icone: require("../assets/images/congelados.png"),
  },
  {
    id: 3,
    descricao: "Enlatados",
    icone: require("../assets/images/enlatados.png"),
  },
  {
    id: 4,
    descricao: "Bebidas",
    icone: require("../assets/images/bebidas.png"),
  },
  {
    id: 5,
    descricao: "Massas",
    icone: require("../assets/images/massas.png"),
  },
  {
    id: 6,
    descricao: "Doces",
    icone: require("../assets/images/doces.png"),
  },
  {
    id: 7,
    descricao: "Grãos",
    icone: require("../assets/images/graos.png"),
  },
  {
    id: 8,
    descricao: "Molhos",
    icone: require("../assets/images/molhos.png"),
  },
];

export const supermarkets = [
  {
    id: 1,
    nome: "Supermercado Formosa",
    endereco: "Rua Travessa Sn Dezessete",
    logotipo: require("../assets/images/formosa.png"),
  },
  {
    id: 2,
    nome: "Supermercado Líder",
    endereco: "Rodovia BR-316, km 2",
    logotipo: require("../assets/images/lider.png"),
  },
  {
    id: 3,
    nome: "Atacadão",
    endereco: "Rodovia Bernardo Sayão, 1250",
    logotipo: require("../assets/images/atacadao.png"),
  },
  {
    id: 4,
    nome: "Assaí Atacadista",
    endereco: "Rodovia Mário Covas, 69",
    logotipo: require("../assets/images/assai.png"),
  },
  {
    id: 5,
    nome: "Mix Mateus Atacarejo",
    endereco: "Avenida Dr. Freitas, 1228",
    logotipo: require("../assets/images/mixmateus.png"),
  },
  {
    id: 6,
    nome: "Econômico Meio a Meio",
    endereco: "Rua Engenheiro Fernando Guilhon, 962",
    logotipo: require("../assets/images/economico.png"),
  },
  {
    id: 7,
    nome: "Preço Baixo Meio a Meio",
    endereco: "Avenida Senador Lemos, 2842",
    logotipo: require("../assets/images/preco_baixo.png"),
  },
];

export const pedidos = [
  {
    id: 1,
    nome: "Supermercado Líder",
    endereco: "Rodovia BR-316, km 2",
    status: "Entregue",
    dt_pedido: "10/02/2025",
    vl_total: 149,
    logotipo: require("../assets/images/lider.png"),
  },
  {
    id: 2,
    nome: "Atacadão",
    endereco: "Rodovia Bernardo Sayão, 1250",
    status: "Entregue",
    dt_pedido: "14/02/2025",
    vl_total: 52,
    logotipo: require("../assets/images/atacadao.png"),
  },
  {
    id: 3,
    nome: "Preço Baixo Meio a Meio",
    endereco: "Avenida Senador Lemos, 2842",
    status: "Entregue",
    dt_pedido: "19/02/2025",
    vl_total: 71,
    logotipo: require("../assets/images/preco_baixo.png"),
  },
];

export const supermarket = {
  id: 1,
  nome: "Preço Baixo Meio a Meio",
  endereco: "Avenida Senador Lemos, 2842",
  logotipo: require("../assets/images/preco_baixo.png"),
  foto: require("../assets/images/meio_a_meio_real.png"),
  vlEntrega: 5.0,
  isFavorito: true,
  produtos: [
    {
      idCategoria: 1,
      categoria: "Ofertas",
      itens: [
        {
          idProduto: 1,
          nome: "Pizza Calabresa",
          descricao: "Massa artesanal, mussarela e calabresa",
          valor: 30.0,
          foto: require("../assets/images/produto_pizza.png"),
        },
        {
          idProduto: 2,
          nome: "Coca-Cola Lata",
          descricao: "Coca-Cola lata de 300ml trincando de gelada",
          valor: 5.0,
          foto: require("../assets/images/produto_coca.png"),
        },
      ],
    },
    {
      idCategoria: 2,
      categoria: "Mais Pedidos",
      itens: [
        {
          idProduto: 3,
          nome: "Pizza Mussarela",
          descricao: "Massa artesanal, mussarela e calabresa",
          valor: 30.0,
          foto: require("../assets/images/produto_pizza.png"),
        },
        {
          idProduto: 4,
          nome: "Coca-Cola Litro",
          descricao: "Coca-Cola lata de 300ml trincando de gelada",
          valor: 5.0,
          foto: require("../assets/images/produto_coca.png"),
        },
      ],
    },
  ],
};

export const pedido = {
  id: 1,
  nome: "Meio a Meio Preço Baixo",
  endereco: "Avenida Senador Lemos, 2842",
  status: "Entregue",
  dt_pedido: "10/05/2024",
  vl_total: 66.0,
  logotipo: require("../assets/images/preco_baixo.png"),
  itens: [
    {
      idItem: 1,
      idProduto: 1,
      nome: "Pizza Calabresa",
      descricao: "Massa artesanal, mussarela e calabresa",
      foto: require("../assets/images/produto_pizza.png"),
      qtd: 2,
      vlUnitario: 30.0,
      vlTotal: 60.0,
    },
    {
      idItem: 2,
      idProduto: 2,
      nome: "Coca-Cola Lata",
      descricao: "Coca-Cola lata de 300ml trincando de gelada",
      foto: require("../assets/images/produto_coca.png"),
      qtd: 1,
      vlUnitario: 6.0,
      vlTotal: 6.0,
    },
  ],
};
