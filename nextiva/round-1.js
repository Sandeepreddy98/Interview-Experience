// //closure
function x(){
    function y(){
        
        console.log(a,"a");
        var a= 10
    }
    return y
}
const clo = x()
console.log(clo());

//promise

function prom (){
    return new Promise((resolve,reject) => {
        if(true){
            resolve(true)
        }else{
            reject()
        }
    })
}

Array.prototype.myReduce = (fn,curr) => {
    return fn
}

let arr = [1,2,3,4]
arr.map(x => x*x)
arr.map(x => x+x)

Array.prototype.myMap = function (fn){
    let finalArr =[]
    for(let i=0;i<this.length;i++){
        finalArr.push(fn(this[i],i,this))
    }
    return finalArr
    
}

const multiply = arr.myMap(x => x*x)
console.log((multiply));

const obj = { 
    name: "Alice", 
    greet: function() {   console.log(this.name); }, 
    arrowGreet: () => { console.log(this.name); } 
}; 
obj.greet(); // ? 
obj.arrowGreet(); // ?



