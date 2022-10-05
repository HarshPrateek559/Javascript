var string="\n"
function pyramid(num,v){
  for (var i=1;i<=num;i++){
    for(var j=0;j<num-i;j++)
    string+=" ";
    for (var j=0;j<i;j++){
     string+=v;
    }
    string+="\n";
}
}
var n=prompt("Enter number of rows");
var v=prompt("ENTER VALUE TO BE REPEATED");
pyramid(n,v);
console.log(string);