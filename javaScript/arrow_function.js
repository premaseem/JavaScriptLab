
// Normal function
myFunc= function(arg){
    return arg;
}
console.log(myFunc("argument1"))

// Arrow function - Arrow functions allow us to write shorter function syntax
// remove the function keyword
myArrowFunc = (args) => {
    console.log(args)
    return args
}

// when there is only one return statement remove the body paranthesis
myArrowFunc1 = (arg1,arg2) => "Hello world" + arg1 + arg2;

// when there is only one argument remove the arg brackets return statement remove the body paranthesis
myArrowFunc2 = args => "Hello world" +args;

console.log(myArrowFunc2("abc"));