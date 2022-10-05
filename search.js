let database =[5,8,2,9,10,38,4,28,197,345];
let searchItem = prompt("Enter the numeber to be found");
search();
function search(){
  let flag = 0;
  let counter = 0;
  for(let i of database){
    counter ++;
    if(i == searchItem){
      flag++;
      console.log("found the number "+i+" at position "+counter+" in the database");
    }
  }
  if(flag == 0){
    console.log("Sorry, this number is not in our database");
  }
}