
function x(){
    for(var i=0;i<5;i++){
        function close(i){
            setTimeout(()=>{
                console.log(i);},i);
        }
        close(i)
    }
}

x()

// //

const a = function(){
    console.log("a",this === global);    
	const b = {
	func1: function(){
	console.log("b",this === global);
	}};   
	const c = {
	func2: ()=>{        
	console.log("c",this === global);      
	}    
	};    
	b.func1.call(this);    
	c.func2();  
	}
a();

// async function x (){
//     await y()
// }

// function y (){
//     console.log("awaited")
// }
