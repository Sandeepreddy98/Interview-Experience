// arr1 = [40, -1, 10, -1, -1, 20, -1, 30, 50, -1]
// o/p = [50, -1, 40, -1, -1, 30, -1, 20, 10, -1]

function sortPositive(arr){  
    let positiveIntegers = arr.filter(num => num > 0).sort((a,b) => b-a)
    let negativeIntegers = arr.filter(num => num < 0).sort((a,b) => b-a)
    const result = arr.map(num => num <0 ? negativeIntegers.shift() : positiveIntegers.shift())
    return result
}


console.log(sortPositive([40, -1, 10, -1, -1, 20, -1, 30, 50, -2,-1,-10,-8]))