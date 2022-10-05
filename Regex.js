//This program would work like my notes for Regular expressions(Regex) in JavaScript

//Regex are the string patters which can be searched in a String. It looks something like this
var regex = /regex/;

//Flags
//regex in js contains many flags which help in searching  the string pattern in a string. Here are some of them:-

var caseInsensitive = /thisIScAseInsensiTive/i //the i flag signifies that to ignore the case of the letters and search them.

var global = /globalsearch/g //this flag signifies that search is to be carried out even when the required pattern is found. Here is an example:-

var pattern = /a/gi //this regex would find 'a' in every possible way in this string
var search = 'This is the pattern in which A has to be found'
console.log(search.match(pattern)); //the output will be an array [a,A] we will see the match function in next part


//Functions
//Regex in Javascript has many built-in functions. Here are some of them:-

//match , syntax => string.match(regex)
/*This function returns an array of the pattern if found. 
It is useful when we have to find the occurences or number of occurences of a particular pattern or when we have to filter out a pattern out of a string. We have see an example of this function earlier*/

//test , syntax => regex.test(string)
/* This function returns a boolean value and checks whether the pattern exists in the string or not.

//replace , syntax => string.replace(regex, replacement)
/*
This function replaces a string with a replacement string according to the rules of the regex
*/

//searching patterns

// "^" - This symbol enables to check the start of the string
// "$" - This symbol enables to check the end of the string
// "-" - This symbol enables to check a range of characters. This way:- [a-b0-9].
// "+" - This symbol checks for more than one occurences of the pattern it is given to.
// "*" - This symbol checks for 0 or more occurences of the pattern it is given to.
// "?" - This symbol checks for the uncertainty of the pattern it is given to. 
//It returns true even when the pattern does not exist in the string




//character classes

// \w - This character class contains all the letters, digits and the underscore symbol. Like this: [a-z0-9_]
// \W - This character class contains all the symbols other than [a-z0-9_]
// \d - This character class contains only digits. Like this:- [0-9]
// \D - This character class contains all the other characters but digits. Like this:- [^0-9]





/*
Question - Make a Regex for the matching the following condition:- 

1:) The string should only contain alphanumeric characters

2:) The string cannot start with a digit

3:) The digits can only be place at the end of the string. The string can contain any number of digits at the end

4:) The string should be atleast 2 character long with both of the character being alphabets
*/

//solution - 

var regex = /^[a-b][a-b]+\d*$|^[a-b]\d\d+$/i;

/* 
Explanation - 
^ - This symbol is used to check the first character or group of characters in a string
^[a-b] - This block checks if the first character an alphabet or not
[a-b]+ - This block checks rest of the characters to be alphabets. It is not part of the first block as to check the 4th condition that the string should contain min 2 characters, both alphabets. The "+" sign checks if the other characters preceding 2nd one are alphabets or not
\d* - The star symbol signifies the check of 0 or more digits.
$ - This symbol signifies the checks of the last character.
| - This is the 'or' symbol.
^[a-b]\d\d+ - This block checks whether there is one alphabet followed by many digits. This check would only validate a string which has more than two characters, one alphabet and 2 or more digits . Like "A298"
*/


//Number of occurences 

//To specify the number of occurences of a character or a pattern we use this method:-

//{num,} - This sets the lower limit of repitition
//{,num} - This sets the higher limit of repition
//{num1, num2} - This sets the lower as well higher limit of the repitition

//Checking for a pattern which may not exist-

//? - This symbol checks for a pattern which may or may not exist. Example =>

var regex = /colou?r/;

var british = "colour";
regex.test(british)  //true
var american = 'color'
regex.test(american) //true 

//The regex here checks if the rest of the pattern is correct or not and leaves an uncertainty for "u". This way even though it may not exist in the second example, it would still return true.

//Lookaheads

//It is used to check for patterns in the string ahead of time. It is useful when we have to check for multiple patterns in the same string. Example:- 

var string = "banana236" 

/*
1:) Check if the length is of 7 character
2:) Check if there are consecutive digits
*/

var regex = /(?=\w{6})(?=\w*\d{2})/
console.log(regex.test(string)); //true

// (?=\w{6}) - This block checks if the string is 6 character long or not
// (?=\w*\d{2}) - This block checks if there are two consecutive digits or not. The first check is for checking if the other characters are alphanumberic or not.


//Using RegExp object, you can make regex from a variable too

const check = (str, target) => {
    let reg = new RegExp(target+"$", 'i'); //The first argument of this object is the variable and the search patterns while the second argument is the flag
    return reg.test(str)
}

console.log(check('When there is a will, there is a way' , 'way'));


//to give space between two patterns in the string use this method- 

let str = "ThisIsA FineMorning";

str = str.replace(/([a-z])([A-Z])/g,'$1 $2');

console.log(str, " - The regex has made space between the two patterns given in the replace method, using the $number syntax");