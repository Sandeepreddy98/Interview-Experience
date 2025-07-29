
// Array methods - map,filter,reduce

const arr =[1,2,3,4]

const sum = arr.reduce((curr,acc) =>{
    return curr + acc
},0)

console.log(sum);

const multiplyBy2 = arr.map((ele) => {
    return ele * 2
})

console.log(multiplyBy2)

const evenNumbers = arr.filter((ele) => {
    if(ele%2 === 0){
        return ele
    }
})

console.log(evenNumbers)