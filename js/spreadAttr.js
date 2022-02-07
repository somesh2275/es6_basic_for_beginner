/*
Spread Attribute helps to spread the expression. 
*/

let spreadAttr = (...arr) => {
	console.log(arr); //Array [ 15, 20, 30, 60, 120 ]

	let mult = 0;
	for(let exam of arr){
		mult += exam;
	}

	console.log(mult); // output is 245
}

spreadAttr(15,20,30,60,120);

/*
Explaination : In javascript we have to send array as variable to perform addition function

i.e. to call function and execute it. But in ES6 we can send directly values and can collect

with "...arr" this implies we are collecting array and outputs are shown with it.
*/

/*
We can use Math.max for giving max no from array directly. consider following example.
*/

Case I

Math.max(50,100,150); // return 150


Case II

let arr = [10,60,120];
Math.max(arr); // return NaN


Case III

let arr = [15,50,65];
Math.max(...arr); // returns 120

/*
Explaination : Above examples can be understand easily you can also visit spreadAttr.html for

better understanding.
*/