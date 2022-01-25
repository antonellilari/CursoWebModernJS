// chaves significa q é um objeto {} colchetes [] arrays
// um objeto em JS  é uma coleção de chave e valor  vc tem o nome do atributo/indentificador e passa um atributo para ele
//q pode ser texto, um buly  uma colecao de chaves e valores. pode tem um objeto dentro de outro objeto exemplo: produtos e outro objeto categorias.
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    //  obj: {
    //      blabla: 1,
    //     obj: {
    //             blabla: 2
    //      }
    //   }
}

prod2['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod2)

//json  é texto (pesquisar melhor)