/*
We can use object.assign to copy the values from one or more source objects.
*/

let one = {name : 'Somesh'};
let two = {Age : 25};
let output = Object.assign(one, two);

console.log(output); //Output is Object { name: "Somesh", Age: 25 }
console.log(one); // Output is Object { name: "Somesh", Age: 25 }

/*
Explaination : Here as we can see the output is still remains the same.

ie. when we use object.assign we copied the object to every object.
*/