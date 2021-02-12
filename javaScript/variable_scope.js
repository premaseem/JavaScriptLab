/*
# Variable Scopes
    Three ways of defining your variables: var, let, and const.
    var x = 5.6;
    let x = 5.6;
    const x = "abc"
var has a function scope, not a block scope.
If you use var outside of a function, it belongs to the global scope.
If you use var inside of a function, it belongs to that function.
If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

let has a block scope or bracket scope

const cannot be reassigned values, but they can modify value of non primitive data structure like list, maps

Note: If you did not define variable, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

 */

// global variable can be modified and accessed from anywhere
// global variable can be shadowed at function or block level

globalVar = 100;

myFunc = function(){
    var functionVar = 10;
    const constant ="abc";
    {
        let blockVar = 12
        var globalVar=25
    }
    console.log(globalVar)
    // console.log(blockVar) // error outside the blocks
};

myFunc();
console.log(globalVar);
console.log(functionVar);// error outside the function scope