//Notes used to learn JavaScript
/*
RUN USING CTRL + ALT + N
or
ctrl + Options + N

JS has the following types:
Numbers
Strings
Boolean
Symbol
Object
    Function
    Array
    Date
    RegExp
null
undefined
*/ 
console.log('\nintegers and floats');
console.log(3/2);//outputs 1.5 not 1
console.log(Math.floor(3/2));//will output 1 
//integers are implicit floats
//standard operators include + - * and %
//Math is a type object that support advance math functions

//the object praseInt() converts a string to an integer
//the second optional argument is the base
console.log('\nPrase function');
console.log(parseInt('123',10));//123 is the string 10 is the base
console.log(parseInt('010'));//will output 10 or 2 in newer browsers
console.log(parseInt('010',2));//will output 2 because it is represented as binary
console.log(parseInt('0xF'));//will output 15

//+ operator can also be used for conversion
console.log('\n+ operator for conversion');
console.log(+'42');
console.log(+'010');
console.log(+'0x10');

//praseInt() will prase until there is no more valid characters 
// the + operator will return NaN if there one or more non valid characters in the string
console.log('\n');
console.log(parseInt('123abc123',10));//will return 123
console.log(+'123abc123');//will return nan 
//converting a string of words will give special value NaN (not a number)
console.log('\nspecial value NaN');
console.log(parseInt("Hello", 10));

//Number.isNaN() will check if the value is NaN
console.log('\nNumber.isNaN() function');
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN('hello'));//false(not a NaN value)
console.log(Number.isNaN(2));//false

//infinity and negative infinity
console.log('\nInfinity and neg infinity values');
console.log(1 / 0);//infinity
console.log(-1 / 0);//negative infinity

//can check if it is infinite or not with isFinite() function
console.log('\nisFinite() function');
console.log(isFinite((1 / 0)));//false
console.log(isFinite((10*5)));//true

//strings 
console.log('\nstrings');

//strings are a sequence of unicode characters (represented by 1 or 2 code units)
//to find the length of a string we can use .length objects

console.log('hello'.length);//outputs 5

//charAt() function will return the letter at a particular position
console.log('hello'.charAt(4));//will return o 

//.replace() will replace a string with another
console.log('hello, world'.replace('world','mars'));//replaces world with mars

//.toUpperCase turns the whole string uppercase
console.log('hello'.toUpperCase());

//variables can be null and undefined as well
//undefined variables are assigned to nothing

var MyVar = undefined;//variable set to nothing
MyVar = null; //var is set to a non-value

//boolean types are either 1 or 0 (true or false keywords)
//false, 0, empty strings, NaN, null, and undefined are all false
//all other values are true
console.log('\nboolean types');
console.log(Boolean('')); //false
console.log(Boolean(123));//true
//js will do the conversion automatically when put inside a an if statement

//variables
//variables are defined with let cons and var
//let will only have a scope inside the block it was defined in
for(let letVar = 0; letVar<10; letVar++){}//letVar only available in the loop operator

//cons are not meant to be changed
const Pi = 3.71; //setting Pi to something else will throw an error

//var does not have the restriction and the scope can extend outside the block 
//of code the variable was initiated in
var anotherVar;//undefined var
//only functions will have variables with scopes, not blocks(if statements)

//control structures 
//js supports if - else statements
console.log('\n');
if(MyVar == undefined){
    console.log('hello from an if control statement!');
}
//js also supports while and do while loops
console.log('\n')

MyVar = 0;
while(MyVar<5){
    console.log('Hello from a while loop');
    MyVar++;
}

//js supports for-of and for-in loops
//for of will iterate trough iterable objects automatically
//iterable objects include arrays, strings, maps, sets, etc
//for in will iterate trough enumerable properties
console.log('\n');
var myObj = {a: 1, b: 2, c: 3 };
var myWord = "Hello World";

for(let val of myWord)
{
    console.log(val);//will iterate trough each letter in the string
}

console.log('\n');

for(let val in myObj)//will iterate trough the object
{
    console.log(val);
    console.log(myObj[val]);
}

//we can use && and || to make logical comparisons
//js also supports the ? operator for conditional expressions

var ready = (MyVar>0) ? 'good' : 'bad'; 

//js also has the equal value and type operator ===

MyVar == '0'; // this is true
MyVar === '0';//this is false

//switch statements work the same as C
//switch(Case){
//case 1:
// code
// break
//case 2:
//  .
//  .
//  .
// case n:
//
// default:
//
// }


//objects
console.log('\n');
//objects in js are a type of data structure that holds name-pair values
//the "name" is a string the "value" is any other value including objects

var obj = {//object named obj
    name: 'santi',
    role: 'student',
    details : {
        hair_color: 'black',
        age: 23
    }
}

//we can access objects with a dot or a bracket 

console.log(obj.details.hair_color);//black
console.log(obj['details']['age']);

//we can create object prototypes trough functions

function student(name, role, age, hair_color){
    this.name = name;
    this.role = role;
    this.age = age;
    this.hair = hair_color;
}

var you = new student('matt','student',21,'black');//new person name matt

console.log(you['name']);//we can use bracket to access the variables

