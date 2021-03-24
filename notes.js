//Notes used to learn JavaScript
/*
RUN USING CTRL + ALT + N
or
^ + Options + N

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