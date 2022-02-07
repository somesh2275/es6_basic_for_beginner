/*
"sets" are used to store unique values of anytype.
*/

var sets = new Set();
sets.add(1);
sets.add('a');
sets.add(1); // we adding one entry with duplicate values

for(let test of sets){
	console.log(test);
}

//OUTPUT is 
// 1
// a

var sets = new Set([1,2,3,5,8]);
sets.size; // output is 5
sets.has(1); // output is true
sets.has(9); // output is false

/*
Explaination : Here this example can understand easily. Also here "has" method is used to check

where value is present in particular array or not.
*/