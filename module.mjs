//To export a code block in ES6 javascript, use this syntax, this is a module

export const add = (...args) =>{ //This function can be used anywhere by just importing it using ES6 module imports
    i = 0;
    args.forEach((e)=>{
        i+=e;
    });
    return i;
}