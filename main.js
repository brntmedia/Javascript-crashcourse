console.log("Hello World");
console.error("This is an error");
const newLocal = "This is a warning";
console.warn(newLocal)

//var, let, const
//var is a global variable, and can impact other variables
//const is a const varuiable that cannot be reassigned, but let can be
//let age=30;
//age=31;

//console.log(age);

//always use const unless you are going to knowingley reassign a variable such as a score in a game

let score;

score=10;

console.log(score);

//you also need to set a value with const immediately(inline)

//data types: primitive are assigned directly to memory(non-resource
//includes string, number, boolean, null, undefined, symbol

const name='John'; //string variable
const age=30;//number
//const rating=4.5;//no float or decimal type in Javascript still recognized as a number
//const isCool=true;//boolean true or false statments
const x =null;//empty variable
//const y =undefined;//gives you the ability to explicitly define later 
//let z;//also undefined ifi initalized on let

console.log(typeof x)
//reads x as object, this is an error due to program confusion

//strings:concatenation
console.log("My name is "+name+" and I am "+age);
//template String
console.log(`My name is ${name} and I am ${age}`);
const hello= `My name is ${name} and I am ${age}`;
console.log(hello);

