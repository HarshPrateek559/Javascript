/*
In this program I made a constructor to take values and make an object.  
Here constructor is a constructor and Jeff and Elsa are objects by using constructor we can create endless objects using parameters of constructor and passing values.
*/
 export class generate {
  constructor(name, age, gender, role) {
    return {
      name,
      age, 
      gender,
      role
    }
  }
}

let Jeff = new generate('Jeff', 51, 'Male', 'CEO of Amazon');
let Elsa = new generate('Elsa', 26, 'female', 'Queen of Arendelle');
let Anna = new generate("Anna", 21, 'female', 'Princess of Arendelle');
Elsa.powers = 'Snow Queen'; //This is the syntax which can be used to add
//values to an object
delete Jeff.gender //this property can remove a key from an object
//it uses dot notation only.
//Object.keys(obj) makes an array of the keys of Object . Example -
console.log(Object.keys(Jeff)); //This will print an array which would consist of the keys of the object Jeff

console.table(Jeff);
console.table(Elsa);
console.table(Anna);
export let Wanda = new generate('Wanda', 27, 'Female', 'Scarlett Witch'); //the export keyword would send wanda to the other file when imported

//These two properties check whether the object has a specific key or not.
//1:) obj.hasOwnProperty("key");
//2:) "key" in obj - This is the syntax of the property