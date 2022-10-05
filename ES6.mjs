//These will be the notes of ES6 that are made using freeCodeCamp 

//To change the value of a const array, use this
const array = [2,5,7];
array.push(6);
console.log(array)

//to make the data absolutely immutable use Object.freeze(data) function
// Object.freeze(array)
// array.sort();//this will throw error as now array has become read-only
// console.log(array)





//Default values can be used for the arguments of a function. This way:-
const def = (num = 1, val = 1)=>{ //the default values of the variable
    // will kick in when no parameter are given
    return num+val;
}

console.log("Not Given ",def()) //Output - 2
console.log("Given ",def(2,4))  //Output - 6





//Rest parameter - They are functional parameters 
//which can take any number of parameter and thus make the function flexible. 

let restPara = (...args) =>{ // the ...symbol is called the spread operator
    return args;
}

console.log(restPara("String", 123, false, null, 0.0001))//it works similar 
//to destructuring in Array or Objects





//DESTRUCTURING: Objects
let obj = {
    today: 16,
    tomorrow: 17,
    dayAfter: 19
}

//this syntax extracts the data of the key to a variable of same name
const {today, dayAfter} = obj; 

//for giving different names to the variable, use this syntax
const{today: tod, tomorrow: tom} = obj
console.log(today, dayAfter, tod, tom)



//for destructuring nested objects :
obj = {
    object: {
        low: 70,
        high: 80,
        avg: 85
    },
    declarative(){
        console.log(`This is a declarative function`)
    }
}

function print({low, high}){  //an example of destructuring in the function parameters when an object is passed as arguments
    console.log("this is from under the object: "+low, high)
}


print(obj.object)
const {object: {low, high}} = obj;
console.log(low, high);


//Destructuring arrays to extract value

let [a,b, ...arr] = array; //this syntax copy the first 
//and second value of array to a and b
console.log(a,b)
console.log(arr) //the spread operator let the 
//other values of the array to be copied 
//to arr making a new array out of it.



//if an object is passed to a function as an object then it can be destructured in the function parameter itself

//Object making functions - These functions take 
//arguments and then return objects from those arguments. 
//Example:-

function car(brand, type, name){
    return {
        brand,
        type,
        name
    }
}

console.log(car("Mercedes", "sedan", "S-Class")); //This statement 
//would log an object with the arguments as 
//keys and the values given as values.

//Another example, which can be used
const getMousePosition = (x,y) =>{return {x,y}} //This will return the location of the mouse cursor on the window.

//Classes - They are the collection of objects and are
// also a factory of objects since it makes 
//objects using it's constructor. Example

class Cars {
    constructor(character){
        this.name = character;
    }
}

let cars = new Cars("Lighting McQueen");
console.log(cars.name);

//To import all the content of a file use * in import statement

import * as classes from './ObjectOriented.mjs' //This can only happen when all the files are modules with the extension of .mjs or there is a package.json file in the project

let Elon = new classes.generate("Elon Musk", 52, "Male", "CEO of Tesla"); //now any function or object of the generate class can be called like this.

console.table(Elon);
console.table(classes.Wanda) //Only the objects which are exported can be used, not the one's that are not exported.

//Promises - They are async functions which can 
//resolve a promise if it is fulfilled or reject it if not.
//It is a new addition in javascript with ES6.
    let boo = true;
const promise = new Promise((resolve, reject)=>{ 
    if(boo){
        resolve("The promise was fulfilled")
    } else {
        reject("The promise was rejected")
    }
}).catch( error =>{ //this block gets the error of 
    //promise when it is rejected.
    console.log(error);
}).then( result =>{ //this block gets the result of 
    //promise when it is fulfilled.
    console.log(result);
})


