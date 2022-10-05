//This is the solution to the code challenge for freeCodeCamp. It is the third solution for getting the Javascript certificate

const Decode = (str) => {
  let last = str.match(/\W$/);
  str = str.replace(/\W$/, "");
  let array = str.split(" ");
  let arr = [];
  array.forEach((e) => {
    let x = "";
    for (let i in e) {
      let v = e.charCodeAt(i);
      if (v - 13 < 65) {
        v = v + 26;
      }
      i = String.fromCharCode(v - 13);
      x += i;
    }
    arr.push(x);
  });
  str = arr.join(" ");
  if (last !== null) {
    str += last;
  }
  return str;
};
console.log(Decode("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(Encode("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."))

function Encode(str) {
    let last = str.match(/\W$/)
    str = str.replace(last, '')
    let array = str.split(' ');
    let arr = [];
    array.forEach((e)=>{
      let x = ""
      for(let i in e){
        let v = e.charCodeAt(i)
        if(v+13>90){
          v = v - 26
        }
        i = String.fromCharCode(v+13);
        x+=i
      }
      arr.push(x)
    })
    str = arr.join(' ')
    if(last!=""){
        str+= last;
    }
    return str
  }
