const maxMinIndex = function(lista) {
    // Valida se o input é um array
    if (!Array.isArray(lista)) {
        console.log('O input não é um array.');
        return {"max": -1, "min": -1};
    }
    try {
    // Caso alguma coisa não seja número, falhar e mostrar o maior índice apenas, o menor deixa como -1        
        if (lista.some(item => typeof item !== 'number' || isNaN(item))) {
            console.log('A lista possui caracteres não numéricos.')
            return {"max": lista.indexOf(max), "min": -1}
    // mas se tudo certo, rodar o programa normal
        } else {
            const max = Math.max(...lista)
            const min = Math.min(...lista)
            return {"max": lista.indexOf(max), "min": lista.indexOf(min)}
        }
    } 
    // qualquer outra bizarrice, catar aqui e definir tudo como [-1, -1]
    catch (error) {
        console.error('An error occurred:', error);
        return {"max": -1, "min": -1};
    }    
}

export default maxMinIndex