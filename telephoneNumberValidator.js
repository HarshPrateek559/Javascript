//This is the fourth challenge for the freecodecamp javascript course
//explanation of the regex used 
/*
^(1/s?) - This block would return true if the string starts with a 1. No matter if it is followed by a space or not.

^(1/s?)? - The ? sign makes this block optional, if the block does not exist in the string it would still return true.

\(\d{3}\) - This block checks if the first 3 digits are wrapped in parenthesis or not.

(\(\d{3}\)|\d{3}) - This block checks the condition if parenthesis are available or not. If they are then the first pattern matches otherwise second one.

[\s\-]? - This block matches incase the block of digits are separated by dash or space between them.

\d{4}$ - This block checks if the string of 4 digits are at the end or not.
*/


const validator = str =>{
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}


console.log(validator("(555)555-5555"))