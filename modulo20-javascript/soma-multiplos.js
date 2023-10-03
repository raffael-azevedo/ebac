const somaMultiplos = function(mul1, mul2, max) {
    let resultado = 0
    for (let index = 1; index < max; index++) {
        if (index % mul1 === 0 || index % mul2 === 0)
        {
            resultado = resultado + index
        }
    }
    return resultado
}

console.log(somaMultiplos(3,5,10)) // 23
console.log(somaMultiplos(5,7,1000)) 