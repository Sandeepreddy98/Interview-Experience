// Closure definition and example
function x(){
    var cl = 10
    function y(){
        console.log(cl)
    }
    return y
}

x()()
//Guess the output
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },i)
}
/*output : 
5
5
5
5
5
*/

//How will you tweak that function  to print 0,1,2,3,4

// Normal
for(let i=0;i<5;i++){ // By using let instead of var
    setTimeout(()=>{
        console.log(i)
    },i)
}

// By closure

for(var i = 0;i<5;i++){
    function close(i){
        setTimeout(() => {
            console.log(i);
        })
    }
    close(i)
}
