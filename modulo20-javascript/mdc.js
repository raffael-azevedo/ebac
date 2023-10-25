const mdc = function (num1, num2) {
  let resto;
  if (
    typeof num1 !== "number" ||
    isNaN(num1) ||
    num1 === undefined ||
    typeof num2 !== "number" ||
    isNaN(num2) ||
    num2 === undefined
  ) {
    return "Um dos argumentos não é um número.";
  } else {
    do {
      resto = num1 % num2;
      num1 = num2;
      num2 = resto;
    } while (resto != 0);
    return num1;
  }
};

export default mdc;
