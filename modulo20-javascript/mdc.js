const mdc = function(num1, num2) {
    let resto
    do {
        resto = num1 % num2
        num1 = num2
        num2 = resto
    } while (resto != 0) 
    return num1    
}

export default mdc

console.log(mdc(20, 24)) // 4
console.log(mdc(18, 60)) // 6