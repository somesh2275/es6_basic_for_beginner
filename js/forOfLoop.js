/*
For of Loop is quite similar to for loop. But here you can break array as well as string also.
*/

let val = [12,15,50,1];
for( let valArr of val){
	console.log(valArr);
}

// Output is
// 12
// 15
// 50
// 1

let str = "ECMAscript";
for(let val of str){
	console.log(val);
}

// Output is
// E
// C
// M
// A
// s
// c
// r
// i
// p
// t



/*
Explaination : Consider first example here array is breaked with the help of "for of" loop.

Also second example tells a string can also breaked into array value.
*/