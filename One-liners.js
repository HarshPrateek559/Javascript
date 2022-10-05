// Arrays
let numbers = [980,485, 122,199, 1, 2004];
let strings = ["Banana", "Orange", "Apple", "Mango"]

//sorting -
//This method sort's numerical arrays
numbers.sort((a,b)=> a-b); 
//This method sort's string arrays alphabetically
strings.sort();
console.log(numbers, strings)
//[ 1, 122, 199, 485, 980, 2004 ] 
//[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//reversing - 
numbers.reverse();
console.log(numbers);
//[ 2004, 980, 485, 199, 122, 1 ]

//To reverse a string, it has to be converted 
// to an array and the back to string after reversal
let str = "This string is going to reverse";
str = str.split('').reverse().join('');
console.log(str)
//esrever ot gniog si gnirts sihT

//filter
let even = numbers.filter(num=>num%2===0)
console.log(even)
//[ 2004, 980, 122 ]

