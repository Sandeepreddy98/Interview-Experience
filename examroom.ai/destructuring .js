// const arry =[1,2]
// const [a,b] = arry
// console.log(a);
// console.log(b);

const obje = {name : "Sandeep",age : 27}
const {id,age} = obje
console.log(id);


const arr = [{candidate:"Stephen", class:'I'}, {candidate:"Jhon", class:'XI'}, {candidate:"Carl", class:'I'}, {candidate:"Maya", class:'I'}];

const obj = {
    "I": [
        {
            "candidate": "Stephen",
            "class": "I"
        },
        {
            "candidate": "Carl",
            "class": "I"
        },
        {
            "candidate": "Maya",
            "class": "I"
        }
    ],
    "XI": [
        {
            "candidate": "Jhon",
            "class": "XI"
        }
    ]
}

function tranformation(arr){
    let finalObj = {}
    // let keysSet = new Set()
    for (let i = 0;i < arr.length;i++){
        finalObj[arr[i].class] = []
    }
    for(let i =0;i<arr.length;i++){
        finalObj[arr[i].class].push(arr[i])
    }
    
    return finalObj
}
console.log(tranformation(arr));

function reverseString(str){
    let finalString = ''
    for(let i=0;i<str.length;i++){
        finalString = str[i] + finalString
    }
    return finalString
}
const str = "You are Sandeep"

const strArr = str.split(' ')
// for
// console.log(reverseString(s));




