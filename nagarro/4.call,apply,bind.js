// What is this keyword in js

//Guess the output
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
	b.func1();    
	c.func2();  
	}
a();

//True
//False
//True

//How will you tweak the code so that it'll give True in all places
const a1 = function(){
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
	b.func1.call(this);   //  applied call
	c.func2();  
	}
a1();

// Explain event loop in js
//As js is single thread but i wanted to call 10 api's parlelly who you'll do it
//promise.all()
//Async await benefits and it's implementation.