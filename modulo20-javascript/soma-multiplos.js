const somaMultiplos = function (mul1, mul2, max) {
  if (
    typeof mul1 !== "number" ||
    isNaN(mul1) ||
    mul1 === undefined ||
    typeof mul2 !== "number" ||
    isNaN(mul2) ||
    mul2 === undefined ||
    typeof max !== "number" ||
    isNaN(max) ||
    max === undefined
  ) {
    return "Um dos argumentos não é um número.";
  } else {
    let resultado = 0;
    for (let index = 1; index < max; index++) {
      if (index % mul1 === 0 || index % mul2 === 0) {
        resultado = resultado + index;
      }
    }
    return resultado;
  }
};

export default somaMultiplos;
