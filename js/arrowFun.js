/*

In this the syntax is changed for declaring function.

*/


//older syntax to declare a function

function testOld (){
	console.log("Older Function"); // output is Older Function
}


//ES6 syntax which introduce arrow to declare a function

let testNew = () => {
	console.log("New Function with arrow syntax"); // output is New Function with arrow syntax
}


/*
Explaination : The ES6 syntax is divided into 2 parameters.

1. let testNew = ()

This is used for declaring variable and assiginig a function ie. () to that variable

2. => {}

This is used for declaring body part of function. 

Consider following Example to understand it more clearly.
*/

let testingArrow = (a,b) => {
	console.log(a*b); // Output is 50
}
testingArrow(5,10);