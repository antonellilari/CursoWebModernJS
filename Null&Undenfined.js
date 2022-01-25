let valor /// variavel não foi inicializada
console.log(valor) //undefined
// console.log(valor2) //vai gerar erro dizendo not is denfined (não foi declarada)

valor = null //ausencia de valor /nao aponta para nenhum lugar na memoria
console.log(valor)
// console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // usar dele ao invez de undefined
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)