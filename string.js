// string cadeia de caracteres q no java script pode ser delimitado de tres formas
//' exemplo1' " exemplo 2" e em versao mais novas com simbolo da crase (2015)ou mais
//ultilizado em templates `exemplo3`
const escola = "Cod3r"

console.log(escola.charAt(4)) //vai mostrar a letra q se localiza no indice 4 da string, iniciando a contagem a apartir do 0 portando a resposta no exemplo é r //
console.log(escola.charAt(5))//vai dar uma resposta vazia pois não encontra o 5 indice//
console.log(escola.charCodeAt(3)) //pega o valor na tabela unicode /ascii //
console.log(escola.indexOf('3'))//existe o indice 3?(no codigo cod3r no caso) existe entao ira resultar no indice 3 //

console.log(escola.substring(1))//ira mostrar oq vem a partir do indice q ser inserido//
console.log(escola.substring(0, 3))//mostra o indice inicial ate o indice 3 mas sem incluir o indice 3//

console.log('Escola ' .concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log(escola.replace(/\w/g, 'e')) //substituir todas letras
console.log(escola.replace(/\d/, 'e'))//substituir  letras

console.log('Ana,Maria,Pedro'.split(',')) // faz um array pode ser usado tambem (/,/)
