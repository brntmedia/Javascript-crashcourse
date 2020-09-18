/*console.log("Hello World");
console.error("This is an error");
const newLocal = "This is a warning";
console.warn(newLocal)

/*var, let, const
var is a global variable, and can impact other variables
const is a const varuiable that cannot be reassigned, but let can be
let age=30;
age=31;

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

//object literals-key value pairs
const person = {
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music', 'movies', 'sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(person);

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.state);

//desctructoring

const{firstName, lastName} = person;

console.log(firstName);
console.log(lastName);

const{address:{city}}=person;//destructing an embedded variable

console.log(city); 

//array
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted:false
    }
];

console.log(todos[1].text);

//jason:data format use freeformater.com

/*{
    "id": 1,
    "text": "Take out trash",
    "isCompleted": true
 }
 
 const todoJSON = JSON.stringify(todos);
 console.log(todoJSON);

 //for loops

for(let i=0; i<10;i++){
console.log(i);
 }



for(let i=0; i<9; i++){
    console.log(`For Loop Number: ${i}`);
}

//while

let i=0
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//loop through array

for(let i=0; i<todos.length; i++){
    console.log(todos[i]);
}

for (let t of todos) {
    console.log(t.isCompleted);
};

//foreach, map, filter

todos.forEach(function(t){
    console.log(t.text);
});

const tText=todos.map(function(t){
return t.text
})

console.log(t.text);

const tCompleted=todos.filter(function(t){
    return t.isCompleted === true;
}).map(function(tText){
    return t.text
});
console.log(tCompleted);

//conditionals

const r=10
for(q=0; q<15; q++)

if(q>10){
    console.log('q is equal to or greater than 10');
    console.log(q)
}
else if(q===10){
    console.log('q equals 10');
    console.log(q);
}
else{
    console.log('q is less than 10');
    console.log(q);
};

if(q>15 || r>10){//or
    console.log(true);
}
else{
    console.log(false);
}

if(q>13 && r>9){//and
    console.log('and true');
}

//teranary operator:used to assign variables based on a condition

const v=9;
//const color = v>10 ? 'red' : 'blue'// ? means if, : menas else so the stament reads if v>10 then color= red, else color = blue
const color ='green';
console.log(color);

//switches, another way to evaluate a condition

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');  
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
//functions

function addNums(num1, num2){
    console.log(num1+num2);
}

addNums(5,4);

function Nums(num3=1,num4=1){
    return num3+num4;
};

console.log(Nums(5,5)); 

const arrowNums = (num5=1, num6=1) => { 
    console.log(num5+num6);
}
//can also be written as const arrowNums = (num5=1, num6=1) => console.log(num5+num6);

arrowNums(7,7);

const soloNums = num7 =>num7+5;

console.log(soloNums(11));

todos.forEach((t) => console.log(t));*/

//object oriented programming

//construct objects using constructor functions with either prototypes or through es6 classes
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob =new Date(dob);
    this.get
}

//Instantiate object
const person1 = new Person('John', 'Doe', 'April 15, 1980')
const person2 = new Person('Mary', 'Smith', 'march, 6, 1970')
console.log(person1);
console.log(person2.dob.getFullYear());

