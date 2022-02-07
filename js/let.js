/*

"let" it is similar to var variable in javascript. 

The only difference is "let" is defined in a block and its scope is limited to that function only.

Consider the following example.

*/


if (true) {
	let z = 10;
	console.log(z); // output is 10
}
console.log(z); // output is undefined variable a


//Consider one more example for better understanding

let z = 5;
let y = 10;
if(true){
	let z = 10;
	console.log(y/z); // output is 1
}
console.log(y/z); // output is 2



/*
Explaination : Here "let" is  used to define a value to a particular variable.

We performed a simple division where z is defined two times first out of scope where

the output is 2 and output of operation within scope is 1.

*/