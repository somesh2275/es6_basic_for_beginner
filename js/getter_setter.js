/*
"Getter Setter" is also an useful functionality used in ES6.
*/

class Cities{
	constructor(city){
		this.city = city;
	}
	getCity(){
		return this.city;
	}
	setCity(city){
		this.city = city;
	}
}

let city = new Cities("Nagpur");
console.log(city); // Output is Object { city: "Nagpur" }
console.log(city.getCity()); // Output is Nagpur

city.setCity("Mumbai");
console.log(city); //Output is Object { city: "Mumbai" }
console.log(city.getCity()); // Output is Mumbai


/*
Explaination : Here we have created a class of cities where firstly we can defined a city

in constructor, We then created a function of getCity who returns the output.

We have also created a setCity function where we can dynamically set value in city.

Rest we can call the class whose output is given.
*/