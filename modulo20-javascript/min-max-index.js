const maxMinIndex = function(lista) {
    const max = Math.max(...lista)
    const min = Math.min(...lista)
    return {"max": lista.indexOf(max), "min": lista.indexOf(min)}
}

console.log(maxMinIndex([1, 2, 3, 4, 5])) // [4,0]
console.log(maxMinIndex([5, 3, 10, 33, 12])) // [3,1]
console.log(maxMinIndex([100, 200, 300, 4, -5])) // [2,4]