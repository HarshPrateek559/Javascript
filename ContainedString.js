//This program checks whether a string contains all the letters of another string.

function contain(arr){
    let s1 = arr[0].toLowerCase().split('');
    let s2 = arr[1].toLowerCase().split('');
    for(let i = 0; i<s2.length; i++){
        if(s1.indexOf(s2[i])<0){
            return false;
        }
    }
    return true;
}

console.log(contain(['voodoo', 'vdo']));