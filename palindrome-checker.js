//first attempt solution
function palindrome(str) {
  str=str.replace(/[_\W]/g,'');
  str=str.toLowerCase();
  let arr = str.split('').reverse().join('')
  //the reverse() function reverses a string
  var flag=true;
  for(var i=0;i<str.length;i++)
  {
    if(str[i]!=arr[i])
    flag=false;
  }
  return flag;
}
console.warn(palindrome("nopepon"));

//second attempt solution
// function palindrome(str) {
//   let regex = /[_\W*]/g;
//   str = str.replace(regex,'').toLowerCase();
//   let arr = str.split('').reverse().join('');
//   console.log(arr)
//   let counter = 0;
//   for(let i=0; i<str.length; i++){
//       if(str[i] == arr[i]){
//         counter++;
//       }
//   }
//   if(counter == str.length){
//     return true;
//   }
//   return false;
// }
// console.log(palindrome('A man, a plan, a canal. Panama'));
