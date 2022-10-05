//This program splits the values of an array in multiple
function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    // i loops from 0 to last elem of arr
    // it increments by the size specified by the input
    // the values are pushed in the result array by slicing them from arr. The slicing is from i th index to i+size th index.
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*This is the dry run of the algoritmn 
1st loop - i = 0; 
removed = [a,b] //these two values are removed from the main array. Start index was 0, end was 2;
Therefore - result = arr.slice(start, end) - [[a,b]]

2nd loop - i = 0+size = 2;
The loop will start from 2nd index position i.e [c] value;
This time the start index will be 2 and end will be 4.
therefore - result.push(arr.slice(2,4)) = [[a,b][c,d]]
*/
