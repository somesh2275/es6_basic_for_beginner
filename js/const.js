/*
"const" is a variable whose value is fixed and you cannot change 

the value of variable defined in const
*/


const CITY = ['Nagpur','Mumbai','Surat'];

CITY = 'Pune'; //invalid assignment to const `CITY' it shows error.

CITY.push('Pune');

console.log(CITY); // Array [ "Nagpur", "Mumbai", "Surat", "Pune" ]


/*
Explaination : Here CITY is a "const" array in which some of the city names are assigned.

If we assign a new value to that variable directly then it shows error.

So the proper way to add new value in CITY "const" is to push new value in that "const".

*/