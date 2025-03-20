const listaDeCompras = (lista, maximo) =>{
    const produtosPorPreco = lista.filter(produto => produto.preco <= maximo);
    produtosPorPreco.forEach(produto => console.log(`Produto: ${produto.Produto}, Preço: R$ ${produto.preco.toFixed(2)}`))
};
const lista = [
    {Produto:"Ameixa", preco: 30.00},
    {Produto:"Feijao", preco: 40.00}, 
    {Produto:"Abacaxi", preco: 50.00}
];
listaDeCompras(lista, 45.00);