/*
In default Parameter the parameter of function can be fixed but its value while calling

that function can be changed on run time.
*/

Case I 

let defaultFun = (a, b = 5) => {
  console.log(a*b); //Output is 25
}
defaultFun(5);

Case II

let defaultFun = (a, b = 5) => {
  console.log(a*b); //Output is 50
}
defaultFun(5,10);

Case III

let defaultFun = (a = 5, b) => {
  console.log(a*b); //Output is NaN
}
defaultFun(5);

Case IV

let defaultFun = (a = 5, b) => {
  console.log(a*b); //Output is 50
}
defaultFun(5, 10);


/*
Explaination : Here I have given 4 cases with expected output in console log which is prety easy.

Consider Case I > here "a" is variable and "b" is fixed parameter and by passing single parameter

we can get output.

Case II > here though "b" is fixed but passing new value can overright that parameter and will give

the output with new parameter.

Case III > Here "a" is fixed and if we pass new value we get output as NaN which is because it

doesnot have value.

Case IV > Same as case II
*/
