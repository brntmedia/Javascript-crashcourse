console.log("Hello World");
console.error("This is an error");
const newLocal = "This is a warning";
console.warn(newLocal)

/*var, let, const
var is a global variable, and can impact other variables
const is a const varuiable that cannot be reassigned, but let can be
let age=30;
age=31;*/

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

const s='Hello World'

//property doesnt have parathenses, those with parathensese its refered to as a method

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));//can stop a string basedc on the characters
console.log(s.substring(0,5).toLocaleUpperCase())//chainable
console.log(s.split(''))// splits the string into an array, empty '' marks splits it into letters

const t='techonology, computers, it, code';

console.log(t.split(',')); // can split a string for taging for a data base

//arrays- variables that hold multiple values

const numbers=new Array(1,2,3,4,5,)//adding the term 'new' is known as a CONSTRUCTOR 
console.log(numbers)

const fruits=['apples', 'oranges', 'pears'];//you can add multiple data types in a single array, and doesnt require you to set the number of variables within an array
console.log(fruits[1]);//arrays start counting from 0, not 1

fruits[3]='grapes';
console.log(fruits);//you can add values to arrays using const, this is not the best way to add values to the end

fruits.push('pinapples')//add to the end
console.log(fruits);

fruits.unshift('mangos')//add to the beginning
console.log(fruits);

fruits.pop();//removes the final variable in an array
console.log(fruits);

console.log(Array.isArray(fruits));//tells you if an item is an array

console.log(Array.isArray('Hello World'));

console.log(fruits.indexOf('oranges'));

