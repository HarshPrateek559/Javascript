let arr = [1,3,2,5,4,10,9];
 arr.sort((a,b)=>{return a-b})
let ar = [...arr];
console.log(ar);
let reverse = [];
let l = arr.length;
for(let i = 0; i<l;i++){
  reverse.push(arr.pop());
}
console.log(reverse);