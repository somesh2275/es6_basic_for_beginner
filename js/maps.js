/*
"maps" it hold array's key value pair, but  here we can design our own key value pair and 

its indexes are unique.
*/

var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);

let t = NewMap.get('name');
console.log(t); // output is John
let t1 = NewMap.get('id');
console.log(t1); // output is 2345796
let t2 = NewMap.get('interest');
console.log(t2); // output is Array [ "js", "ruby", "python" ]
let t3 = NewMap.size
console.log(t3); // Output is 3 which give size of NewMap Variable

/*
Explaination: Here we are assigning a new variable with map as object in that variable.

Here we are setting and getting the values from that variable.
*/