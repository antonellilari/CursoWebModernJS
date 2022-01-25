// scope significa até onde a variavel é visivel
//fuja do scope global
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)