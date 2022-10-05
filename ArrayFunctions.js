let arr = ["this", "is", "an", "array", "replaced", "text"];

//splice is an array function which is used to remove values from a specific position
let spl = arr.splice(4, 2, "text", "replaced");
//The first argument is the start index of the data which is to be replaced,
//second is the number of values removed,
//third and fourth are the values which would be added at the positions from which data is deleted.
console.log(arr, spl);

let sliced = arr.slice(4, 6);
/* 
The slice method returns
the values from the start position(first argument)
to end position(second argument)
*/
console.log(arr, sliced);

//This function would return the largest value of an array -
function largestOfFour(arr) {
  let max = [];
  arr.forEach((e) => {
    max.push(Math.max.apply(null, e));
    //This Math.max.apply(null,e) function returns the
    //largest value of an array where e is the array
  });
  return max;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
  " Array of the largest numbers in individual arrays"
);

//map function - A map function iterates over an array and returns the value according to a callback function in it.

let res = arr.map((e) => {
  if (e.indexOf("a") != -1) {
    return e;
  }
});

console.log(res.filter((e) => e)); //The filter method only returns the values which passes the condition given in the callback function. In this case the condition is if e is not a falsy value, it shall pass. Filter can only check a condition and not make changes to the array like map can.

//The reduce method is like a parent method of both the filter and the map method.

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
  //The first argument is an accumulator with the arguments after the callback its initial state. The second argument is the value from the array.
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

//every() - This is an array function which return true or false if the condition for all the values of an array is true or not. It takes a callback function and does not change the array.

let array = [1, -1, 4, -3, 5, 6, 6];

let bool = array.every((e) => {
  return e > 0;
});

console.log(bool, "This is because not all the elements are positive in the array, from every");

//some() - This is an array function which return true if any value of the array pass a condition and false if none of the values pass. It takes a callback function and does not change the array.

bool = array.some(e=>{
  return e<0;
})

console.log(bool, "This is because atleast one of the value is negative in the array, from some");